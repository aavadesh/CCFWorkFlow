import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CompetencyframeworkRoutingModule } from './competencyframework-routing.module';
import { CompetencyframeworkComponent } from './competencyframework.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompetencyframeworkCreateComponent } from './Create/competencyframework-create.component';

@NgModule({
    imports: [
      CommonModule,
      MatSortModule,
      MatPaginatorModule,
      MatTableModule,
      CompetencyframeworkRoutingModule,
      FlexLayoutModule,
    ],
    declarations: [CompetencyframeworkComponent, CompetencyframeworkCreateComponent]
  })
  export class CompetencyframeworkModule { }