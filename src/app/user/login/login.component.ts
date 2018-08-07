import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password: string;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
login(loginData: NgForm) {
  console.log(loginData);
this.authService.loginUser(this.username, this.password);
}
redirect() {
  this.route.navigateByUrl('events');
  }
  cancel() {
    this.route.navigateByUrl('events');
  }
}
