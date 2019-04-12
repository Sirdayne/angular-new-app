import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: object = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signIn(this.form).subscribe(res => {
      if (res && res.token) {
        localStorage.setItem('token', res.token);
      }
    });
  }

}
