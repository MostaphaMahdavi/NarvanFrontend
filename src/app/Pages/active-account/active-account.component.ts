import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-page-active-account',
  templateUrl: './active-account.component.html',
  styleUrls: ['./active-account.component.css']
})
export class ActiveAccountComponent implements OnInit {

  isLoading: boolean = true;


  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params);
    // this.authService.activateUser(this.activatedRoute.snapshot.params['activeCode']);

    this.authService.activateUser(this.activatedRoute.snapshot.params.activeCode).subscribe(res => {
      console.log(res);
    
      if (res.status === "success") {
        this.isLoading = false;
        this.router.navigate(['login']);
      }
      
    });

  }

}
