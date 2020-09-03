import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor() { }

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

}
