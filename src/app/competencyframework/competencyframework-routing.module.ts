import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetencyframeworkComponent } from './competencyframework.component';

const routes: Routes = [
  { path: '', component: CompetencyframeworkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompetencyframeworkRoutingModule { }
