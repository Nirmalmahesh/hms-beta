import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:8085/";

  public navigate = () =>{
    if(this.isTokenAvailable()){
      this.route.navigate(["dashboard"]);      
    }else{
      this.route.navigate(["login"]);
    }
  }

  isTokenAvailable = () =>{
   return (!!localStorage.getItem("token"));
  }

  getToken = () =>{
    if(this.isTokenAvailable){
      return localStorage.getItem("token");
    }else{
      return null;
    }
  }
  public authenticate = (user) =>{
      
    return this._http.post(`${this.url}authenticate`,user);
  }
  constructor(private _http : HttpClient,private route : Router) { }
}
