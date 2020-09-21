import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetencydetailComponent } from './competencydetail.component';

const routes: Routes = [
  { path: '', component: CompetencydetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompetencydetailRoutingModule { }
