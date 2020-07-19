import { Component, OnInit } from '@angular/core';
import { currentUserInfo } from './Dtos/Account/currentUserInfo';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontEnd';
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(res => {
      console.log(res);

      if (res.status === "success") 
      {      
        const user=new currentUserInfo(res.data.userId,res.data.firstName,res.data.lastName,res.data.email,res.data.address)
     
        this.authService.setCurrentUse(user);

      }


    });

  }


}
