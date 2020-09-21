import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Competencydetail } from '../competencyframeworddetail/competencydetail';
import { CompetencyframeworkService } from '../services/competencyframework.service';
import { CompetencydetailService } from '../services/competencydetail.service';
import { EmployeecompetencyService } from '../services/employeecompetency.service';
import { Employeecompetency } from '../competencyframeworddetail/employeecompetency';
import { from, Observable, Subscription } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-competencydetail',
  templateUrl: './competencydetail.component.html',
  styleUrls: ['./competencydetail.component.css'],
})
export class CompetencydetailComponent implements OnInit {
  information: string;
  CompetencyNameList: Competencydetail[];
  employeecompetency: Employeecompetency;
  fileData: File = null;
  previewUrl: any = null;
  fileName = '';
  fileSize = 0;
  fileType = 0;
  isUpload = false;
  competencyInformation = '';
  competencyID = 0;
  EmployeeCompetencyID = 0;
  btnDraftDisabled = false;
  btnSaveDisabled = false;
  isOpen = false;
  protected _apiEndpoint : string  = environment.apiEndpoint;
  @ViewChild(TabsetComponent) tabset: TabsetComponent;

  employeeCompetencyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private competencyframeworkService: CompetencyframeworkService,
    private competencyDetailService: CompetencydetailService,
    private employeeCompetencyService: EmployeecompetencyService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.employeeCompetencyForm = this.formBuilder.group({
      EmployeeCommnet: new FormControl(null),
      Files: new FormControl(null),
      IsSave: new FormControl(false),
      IsDraft: new FormControl(false),
      CompetencyID: new FormControl(null),
      ReviewerComment: new FormControl(null),
      ReviewID: new FormControl(null),
      IsComplete: new FormControl(null),
      EmployeeID: new FormControl(null),
      EmployeeCompetencyID: new FormControl(null),
    });

    this.bindCompetencyNoteByID();
    this.bindCompetencyNameByID();

    this.btnDraftDisabled = true;
    this.btnSaveDisabled = true;
  }

  bindCompetencyNoteByID() {
    this.competencyframeworkService
      .findOne(this.route.snapshot.params['id'])
      .subscribe((res) => {
        this.information = res.details;
      });
  }

  bindCompetencyNameByID() {
    this.competencyDetailService
      .findById(this.route.snapshot.params['id'])
      .subscribe((resp: Competencydetail[]) => {
        debugger
        this.CompetencyNameList = resp;
        const activeTab = this.tabset.tabs.filter((tab) => tab.active);
        let result = this.CompetencyNameList.find(
          (x) => x.competencyName === activeTab[0].heading
        );
        this.competencyID = result.competencyID;
        if (result != undefined) {
          this.competencyInformation = (result.details as unknown) as string;
        }

        
    this.bindEmployeeCompetency(this.competencyID);
      });
  }

  bindEmployeeCompetency(competencyID: number) {
    this.employeeCompetencyService.findEmployeeCompetecyById(competencyID).subscribe((res : any) => {
      if(res){
        
      
      this.btnDraftDisabled = false
        this.employeeCompetencyForm.patchValue({
          EmployeeCompetencyID: res.employeeCompetencyID,
          EmployeeCommnet: res.employeeCommnet,
          ReviewerComment: res.reviewerComment,
          IsComplete: res.isComplete,
          IsSave: res.isSave,
          IsDraft: res.isDraft,
          EmployeeID: res.employeeID,
          ReviewID: res.reviewID,
          CompetencyID: res.competencyID
        });
      }
      });

    this.competencyframeworkService
      .findOne(this.route.snapshot.params['id'])
      .subscribe((res) => {
        this.information = res.details;
      });
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    this.fileName = this.fileData.name;
    this.fileSize = this.fileData.size;
    if (/word/i.exec(mimeType)) {
      this.fileType = 1;
    } else if (/pdf/i.exec(mimeType)) {
      this.fileType = 3;
    } else if (/excel/i.exec(mimeType)) {
      this.fileType = 2;
    } else {
      this.fileType = 4;
    }
    this.isUpload = true;
    return;
  }

  getFormData(
    employeeCompetencyData, isSave, isDraft, isComplete
  ): FormData {
    debugger
    const formData = new FormData();
    formData.append('EmployeeCommnet', employeeCompetencyData.EmployeeCommnet);
    formData.append('ReviewerComment', employeeCompetencyData.ReviewerComment ?  null : '');
    formData.append('Files', this.fileData);
    formData.append('EmployeeID', '1');
    formData.append('IsSave', isSave);
    formData.append('IsDraft', isDraft);
    formData.append('IsComplete' ,isComplete);
    formData.append('EmployeeCompetencyID', employeeCompetencyData.EmployeeCompetencyID  ?  null : '0');
    formData.append('CompetencyID', this.competencyID.toString());
    formData.append('ReviewID', '2');
    return formData;
  }

  onSubmit(employeeCompetencyData): void {
    employeeCompetencyData.IsSave= 'true';
    const formData = this.getFormData(employeeCompetencyData, 'true', 'false', 'false');

    const headers = new HttpHeaders().append(
      'Content-Disposition',
      'multipart/form-data'
    );
    this.http
      .post<any>(`${this._apiEndpoint}/api/EmployeeCompetency`, formData, {
        headers: headers,
      })
      .subscribe((res) => {
        this.btnDraftDisabled = false;
        this.employeeCompetencyForm.patchValue({
          EmployeeCompetencyID: res.EmployeeCompetencyID,
          IsSave: res.isSave,
          IsDraft: res.isDraft,
          EmployeeID: res.employeeID,
          ReviewID: res.employeeID,
          CompetencyID: res.employeeID,
          IsComplete: res.IsComplete
        });

        this.isOpen = true;
      });
    this.isUpload = false;
    this.employeeCompetencyForm.reset();
  }

  onDraft(employeeCompetencyData): void {
    if (this.EmployeeCompetencyID == 0) {
      employeeCompetencyData.IsDraft = 'true';
      employeeCompetencyData.EmployeeCompetencyID = 0;
      const formData = this.getFormData(employeeCompetencyData, 'false', 'true', 'false');

      const headers = new HttpHeaders().append(
        'Content-Disposition',
        'multipart/form-data'
      );

      this.http
        .post<any>(`${this._apiEndpoint}/api/EmployeeCompetency`, formData, {
          headers: headers,
        })
        .subscribe((res) => {
          this.employeeCompetencyForm.patchValue({
            EmployeeCompetencyID: res.employeeCompetencyID,
            IsSave: res.isSave,
            IsDraft: res.isDraft,
            EmployeeID: res.employeeID,
            ReviewID: res.employeeID,
            CompetencyID: res.employeeID,
            IsComplete: res.IsComplete
          });

          this.isOpen = true;
        });

      this.isUpload = false;
      this.employeeCompetencyForm.reset();
    }
  }

  onSubmitReviewer(employeeCompetencyData): void {
debugger
    if (this.employeeCompetencyForm.get('EmployeeCompetencyID').value > 0 &&
      this.employeeCompetencyForm.get('IsSave').value == true) {
      employeeCompetencyData.IsComplete = 'true';
      const formData = this.getFormData(employeeCompetencyData, 'false','false', 'true');

      const headers = new HttpHeaders().append(
        'Content-Disposition',
        'multipart/form-data',
      );
      //const params = new HttpParams().set('id', employeeCompetencyData.EmployeeCompetencyID);
      this.http.put<any>(`${this._apiEndpoint}/api/EmployeeCompetency`, formData, { headers: headers })
        .subscribe((res) => {
          ;
          alert('Employee data Updated successfully !!');
        });
      this.isUpload = false;
      this.employeeCompetencyForm.reset();
    }
  }

  onSelect(data: TabDirective): void {
    let result = this.CompetencyNameList.find(
      (x) => x.competencyName === data.heading
    );
    this.competencyID = result.competencyID;
    if (result != undefined) {
      this.competencyInformation = (result.details as unknown) as string;
    }

    this.bindEmployeeCompetency(this.competencyID);
  }
}
