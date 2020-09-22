import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AddCompetencyFrameworkComponent } from './add-competency-framework.component';


const routes: Routes = [
  { path: '', component: AddCompetencyFrameworkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddCompetencyFrameworkRoutingModule { }
