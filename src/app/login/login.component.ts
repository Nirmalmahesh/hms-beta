import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../model/login';
import { AuthService } from '../auth.service';
import { AppConstant } from '../constants/ApplicationConstant';

@Component({
  selector: 'hms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new LoginUser();

  authenticate = () => {
    this.auth.authenticate(this.user).subscribe((data) => {
      localStorage.setItem('token', data[AppConstant.JWT]);
      localStorage.setItem('user', this.user.username.toString());
      this.auth.navigate();
    });
  }
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.navigate();
  }

}
