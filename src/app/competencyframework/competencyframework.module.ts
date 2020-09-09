import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetencyframeworkRoutingModule } from './competencyframework-routing.module';
import { CompetencyframeworkComponent } from './competencyframework.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompetencyframeworkCreateComponent } from './Create/competencyframework-create.component';

@NgModule({
    imports: [
      CommonModule,
      CompetencyframeworkRoutingModule,
      FlexLayoutModule
    ],
    declarations: [CompetencyframeworkComponent, CompetencyframeworkCreateComponent]
  })
  export class CompetencyframeworkModule { }