import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../DTO/Login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:8080/api/auth/login"

  onLogin(loginObj:Login){
    return this.http.post(this.baseUrl,loginObj);
  }

}
