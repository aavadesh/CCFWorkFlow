import { Component, OnInit } from '@angular/core';
import {ValueService} from '../services/value.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ValueServ : ValueService) { }

  ngOnInit(): void {
    debugger
  this.ValueServ.findAll().subscribe((resp =>{
    debugger;

  }))
  }


}
