import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { loginUserInfo } from 'src/app/Dtos/Account/loginUserInfo';
import { AuthService } from 'src/app/services/auth.service';
import { currentUserInfo } from 'src/app/Dtos/Account/currentUserInfo';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginForm:FormGroup;

 @ViewChild('sweetAlert') private sweetAlert: SwalComponent;
 
  constructor(
    private authService:AuthService,
    private router:Router,
    private cookieService:CookieService
    ) { }

  ngOnInit(): void {
   
this.loginForm=new FormGroup({
  email:new FormControl(null,[
    Validators.required,
    Validators.email,
    Validators.maxLength(250)
  ]),
  password:new FormControl(null,[
    Validators.required,
    Validators.maxLength(50)
  ]),
  rememberMe:new FormControl(null,[])
});
 

  }


  submitLoginForm(){
   const loginUSer=new loginUserInfo(
     this.loginForm.controls.email.value,
     this.loginForm.controls.password.value,
     this.loginForm.controls.rememberMe?.value
   )

 


this.authService.loginUser(loginUSer).subscribe(res=>{

  const user=new currentUserInfo(
    res.data.userId,
    res.data.firstName,
    res.data.lastName,
    res.data.email,
    res.data.address,
  )
// this.authService.setCurrentUse(user);
// this.authService.getCurrentUser().subscribe(user=>{
// console.log(user);
// })

console.log(res);
if(res.status==="success"){
  this.authService.setCurrentUse(user);
  this.cookieService.set('narvanCookie',res.data.token,res.data.expireTime*60);
  this.loginForm.reset();
  this.router.navigate(['/']);
}

if(res.status==="notFound"){
  
this.sweetAlert.title="خطا";
this.sweetAlert.icon="error";
this.sweetAlert.text="نام کاربری یا کلمه عبور اشتباه می باشد.";

this.sweetAlert.fire();
}

if(res.status==="error"){
  
  this.sweetAlert.title="خطا";
  this.sweetAlert.icon="warning";
  this.sweetAlert.text="حساب کاربری شما فعال نشده است";

  
  this.sweetAlert.fire();
  }
  




});


  }


}



