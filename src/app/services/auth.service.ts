import { Injectable } from '@angular/core';
import { registerUserInfo } from '../Dtos/Account/registerUserInfo';
import { Observable, observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { loginUserInfo } from '../Dtos/Account/loginUserInfo';
import { ILoginUserAccount } from '../Dtos/Account/ILoginUserAccount';
import { currentUserInfo } from '../Dtos/Account/currentUserInfo';
import { ICheckUserAuthResult } from '../Dtos/Account/ICheckUserAuthResult';
import { CookieService } from 'ngx-cookie-service';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser:BehaviorSubject<currentUserInfo>=new BehaviorSubject<currentUserInfo>(null);

  constructor(private http:HttpClient,private ccokieService:CookieService,private router:Router) { }


registerUser(registerData:registerUserInfo):Observable<any>{

 return this.http.post("account/RegisterUser",registerData);
}

loginUser(loginData:loginUserInfo):Observable<ILoginUserAccount>{
 
  return this.http.post<ILoginUserAccount>("account/LogIn",loginData);
}

setCurrentUse(user:currentUserInfo):void{

  this.currentUser.next(user);
}

getCurrentUser():Observable<currentUserInfo>{
  return this.currentUser;
}

checkAuth():Observable<ICheckUserAuthResult>{
  return this.http.post<ICheckUserAuthResult>('account/CheckUserAuthentication',null)
}

activateUser(emailActiveCode:string):Observable<any>{
return this.http.get('account/activeUser/'+emailActiveCode);
}
 
}
