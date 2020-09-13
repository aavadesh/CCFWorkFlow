import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetencyFramework } from './class/competencyframewokr';
import { CompetencyframeworkService } from '../services/competencyframework.service'
import { from, Observable, Subscription } from "rxjs";


@Component({
  selector: 'app-competencyframework',
  templateUrl: './competencyframework.component.html',
  styleUrls: ['./competencyframework.component.css']
})
export class CompetencyframeworkComponent implements OnInit {
  
  name: string;
  competencyFrameworkList: CompetencyFramework[];

  constructor(private CrudService: CompetencyframeworkService,
    private router: Router) { }

  ngOnInit(): void {
    this.bindCompetencyFramework();
  }

  bindCompetencyFramework() {
    this.CrudService.findAll().subscribe(res=> {
      this.competencyFrameworkList = res;
      console.log(this.competencyFrameworkList);
 });
  }

}
