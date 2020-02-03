import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://hms-demo-app.us-east-1.elasticbeanstalk.com:8080/';

  public navigate = () => {
    if (this.isTokenAvailable()) {
      this.route.navigate(['dashboard']);
    } else {
      this.route.navigate(['login']);
    }
  }

  isTokenAvailable = () => {
    return (!!localStorage.getItem('token'));
  }

  getToken = () => {
    if (this.isTokenAvailable) {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }
  public authenticate = (user) => {

    return this.http.post(`${this.url}authenticate`, user);
  }
  constructor(private http: HttpClient, private route: Router) { }
}
