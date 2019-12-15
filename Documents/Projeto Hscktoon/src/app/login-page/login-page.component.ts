import {Component} from '@angular/core';
import {ApiService} from '../api.service';
import {CustomerService} from '../customers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  email = 'giovana.np1@gmail.com';
  password = 'hackathon';

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/quiz');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

}