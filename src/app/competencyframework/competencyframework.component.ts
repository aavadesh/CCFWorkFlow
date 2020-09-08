import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetencyFramework } from './class/competencyframewokr';
import { CrudService } from '../shared/crud.service';
import { Observable } from "rxjs";


@Component({
  selector: 'app-competencyframework',
  templateUrl: './competencyframework.component.html',
  styleUrls: ['./competencyframework.component.css']
})
export class CompetencyframeworkComponent implements OnInit {
  
  name: string;
  competencyFrameworkList: Observable<CompetencyFramework[]>;

  constructor(private CrudService: CrudService,
    private router: Router) { }

  ngOnInit(): void {
    this.bindCompetencyFramework();
  }

  bindCompetencyFramework() {
    debugger;
    this.CrudService.getList().subscribe(res=> {
      
      debugger;
      this.competencyFrameworkList = res;
      console.log(this.competencyFrameworkList);
 });
  }

}
