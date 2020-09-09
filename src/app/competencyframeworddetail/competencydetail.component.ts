import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Competencydetail } from '../competencyframeworddetail/competencydetail';
import { CompetencyframeworkService } from '../services/competencyframework.service';
import { CompetencydetailService } from '../services/competencydetail.service';
import { from, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-competencydetail',
  templateUrl: './competencydetail.component.html',
  styleUrls: ['./competencydetail.component.css']
})
export class CompetencydetailComponent implements OnInit {

  information : string;
  CompetencyNameList: Competencydetail[];

  constructor(private competencyframeworkService: CompetencyframeworkService, 
    private competencydetail: CompetencydetailService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    debugger;
    this.bindCompetencyNoteByID();
    this.bindCompetencyNameByID();
  }

  tabs: any[] = [
    ];
  

  bindCompetencyNoteByID() {
    this.competencyframeworkService.findOne(this.route.snapshot.params['id']).subscribe(res=> {
      debugger;
      this.information = res.details;
 });
  }

  bindCompetencyNameByID() {
    debugger;
    this.competencydetail.findById(this.route.snapshot.params['id']).subscribe((resp : any) =>{
      if(resp){
        resp.map(x =>{
          this.tabs.push({
            title : x.competencyName,
            content : "ZYXYXXXY"
          });
        })
      }
    });
  }

}
