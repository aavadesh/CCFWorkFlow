import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetencydetailRoutingModule } from './competencydetail-routing.module';
import { CompetencydetailComponent } from './competencydetail.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    CompetencydetailRoutingModule,
    FlexLayoutModule
  ],
  declarations: [CompetencydetailComponent]
})
export class CompetencydetailModule { }
