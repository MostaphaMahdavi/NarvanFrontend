import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { registerUserInfo } from 'src/app/Dtos/Account/registerUserInfo';
import { AuthService } from 'src/app/services/auth.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm:FormGroup;

  @ViewChild('sweetAlert') private sweetAlert: SwalComponent;
 

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      email:new FormControl(
        null,
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(250)
        ]
      ),

      firstName:new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(250)
        ]
        ),

        lastName:new FormControl(
          null,
          [
            Validators.required,
            Validators.maxLength(250)
          ]
        ),

        address:new FormControl(
          null,
          [
            Validators.required,
            Validators.maxLength(500)
          ]
        ),

        password:new FormControl(
          null,
          [
            Validators.required,
            Validators.maxLength(50)
          ]
        ),

        rePassword:new FormControl(
          null,
          [
            Validators.required,
            Validators.maxLength(50)
          ]
        )

    });
  }


  submitRegisterForm(){
  
const registerData=new registerUserInfo(
  this.registerForm.controls.email.value,
  this.registerForm.controls.firstName.value,
  this.registerForm.controls.lastName.value,
  this.registerForm.controls.address.value,
  this.registerForm.controls.password.value,
  this.registerForm.controls.rePassword.value 
  )
   console.log(this.registerForm);
this.authService.registerUser(registerData).subscribe(res=>{
 debugger;
  if(res.status==="success"){
    this.registerForm.reset();
 this.sweetAlert.title="موفق"
 this.sweetAlert.text=".ثبت نام با موفقیت انجام شد جهت فعالسازی حساب خود به ایمیل خود مراجعه نمایید";
 this.sweetAlert.icon="success";
 this.sweetAlert.confirmButtonText="باشه";
 this.sweetAlert.confirmButtonColor="success"

this.sweetAlert.fire();

    
  }

  if(res.status==="error")
  {
    if(res.data.info==="Email Exists"){
      this.sweetAlert.title="خطا";
      this.sweetAlert.icon="error";
      this.sweetAlert.confirmButtonText="باشه";
      this.sweetAlert.confirmButtonColor="error"
      this.sweetAlert.fire();

    }
    if(res.data.info==="error"){
      this.sweetAlert.title="خطا";
      this.sweetAlert.text="خطایی رخ داده است.";
      this.sweetAlert.icon="error";
      this.sweetAlert.confirmButtonText="باشه";
      this.sweetAlert.confirmButtonColor="error"
      this.sweetAlert.fire();
    }
  }

});
  }

}
