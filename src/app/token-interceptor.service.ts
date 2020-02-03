import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedRequest;
    if (this.auth.isTokenAvailable()) {
      tokenizedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`,
          'Access-Control-Allow-Origin': '*'
        }
      });
    } else {
      tokenizedRequest = req.clone();
    }

    return next.handle(tokenizedRequest);
  }

  constructor(private auth: AuthService) { }
}
