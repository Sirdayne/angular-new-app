import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

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

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  signIn() {
    this.http.post(this.form).subscribe(res => {
      if (res && res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('tenant', '1');
      }
    });
  }

}
