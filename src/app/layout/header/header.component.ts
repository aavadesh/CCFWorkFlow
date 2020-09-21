import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  UserName: string;
  constructor() { 
    console.log('Header constructor called');
    this.UserName = localStorage.getItem("UserName");
  }

  ngOnInit(): void {
  }

}
