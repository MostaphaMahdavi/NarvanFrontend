import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { currentUserInfo } from 'src/app/Dtos/Account/currentUserInfo';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  user: currentUserInfo = null;
  constructor(private authService: AuthService,private router:Router,private cookieService:CookieService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(res => {
      this.user = res;
    });
  }


  logOutUser(){
   
    this.cookieService.delete('narvanCookie');
    this.authService.setCurrentUse(null);
    this.router.navigate(['/']);

 
  }

}
