import { Component, OnInit } from '@angular/core';
import { Employeecompetency } from '../competencyframeworddetail/employeecompetency';
import { EmployeecompetencyService } from '../services/employeecompetency.service';
import {ValueService} from '../services/value.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public employeeCompetencyList: Employeecompetency[];
  frameworkName: string;
  constructor(private employeeCompetencyService: EmployeecompetencyService) { }

  ngOnInit(): void {
  this.employeeCompetencyService.findEmployeeId(1).subscribe((resp: any[]) => {
debugger
this.employeeCompetencyList = resp;
this.frameworkName = this.employeeCompetencyList[0]['frameworkName'];
  });
  }


}
