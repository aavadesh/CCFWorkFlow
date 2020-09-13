import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompetencydetailRoutingModule } from './competencydetail-routing.module';
import { CompetencydetailComponent } from './competencydetail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabsModule} from 'ngx-bootstrap/tabs';  
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  imports: [
    CommonModule,
    CompetencydetailRoutingModule,
    FlexLayoutModule,
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    AngularEditorModule 
  ],
  declarations: [CompetencydetailComponent]
})
export class CompetencydetailModule { }
