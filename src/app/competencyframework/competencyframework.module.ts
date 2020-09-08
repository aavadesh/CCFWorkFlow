import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetencyframeworkRoutingModule } from './competencyframework-routing.module';
import { CompetencyframeworkComponent } from './competencyframework.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [
      CommonModule,
      CompetencyframeworkRoutingModule,
      FlexLayoutModule
    ],
    declarations: [CompetencyframeworkComponent]
  })
  export class CompetencyframeworkModule { }