import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EditCompetencyFrameworkComponent } from './edit-competency-framework.component';

const routes: Routes = [
  { path: '', component: EditCompetencyFrameworkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCompetencyFrameworkRoutingModule { }
