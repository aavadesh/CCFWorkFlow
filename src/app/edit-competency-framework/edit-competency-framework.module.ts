import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditCompetencyFrameworkRoutingModule } from './edit-competency-framework-routing.module';
import { EditCompetencyFrameworkComponent } from './edit-competency-framework.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    EditCompetencyFrameworkRoutingModule,
    FlexLayoutModule,
    TabsModule.forRoot(),
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  declarations: [EditCompetencyFrameworkComponent]
})
export class EditCompetencyFrameworkModule { }
