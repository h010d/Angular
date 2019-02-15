import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  public openForgotPage() {
    this.router.navigate(['forgot-pass'], {relativeTo: this.route});
  }

  public changeAuthStatus(status: string) {
    console.log(status);
    if (status === 'login') {
      this.auth.logIn();
      console.log(status);
    } else {
      this.auth.logOut();
      console.log(status);
    }
  }
  public showAuthStatus(){
    console.log(this.auth.isLoggedIn);
  }
}
