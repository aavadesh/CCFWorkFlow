import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetencydetailRoutingModule } from './competencydetail-routing.module';
import { CompetencydetailComponent } from './competencydetail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabsModule} from 'ngx-bootstrap/tabs';  


@NgModule({
  imports: [
    CommonModule,
    CompetencydetailRoutingModule,
    FlexLayoutModule,
    TabsModule.forRoot()
  ],
  declarations: [CompetencydetailComponent]
})
export class CompetencydetailModule { }
