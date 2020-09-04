import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    debugger;
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('content-wrapper');
  }

  ngOnDestroy(): void {
    debugger;
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('content-wrapper');
  }

  login(){
    this.auth.login();
  }
}
