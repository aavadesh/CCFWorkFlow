import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Competencydetail } from '../competencyframeworddetail/competencydetail';
import { CompetencyframeworkService } from '../services/competencyframework.service';
import { CompetencydetailService } from '../services/competencydetail.service';
import { EmployeecompetencyService } from '../services/employeecompetency.service';
import { Employeecompetency } from '../competencyframeworddetail/employeecompetency';
import { from, Observable, Subscription } from "rxjs";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TabDirective } from 'ngx-bootstrap/tabs';


@Component({
  selector: 'app-competencydetail',
  templateUrl: './competencydetail.component.html',
  styleUrls: ['./competencydetail.component.css']
})
export class CompetencydetailComponent implements OnInit {

  information : string;
  CompetencyNameList: Competencydetail[];
  employeeCompetency: Employeecompetency;
  form: FormGroup;

fileData: File = null;
previewUrl:any = null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;
fileName = "";
fileSize = 0;
fileType = 0;
isUpload = false; 


competencyForm: FormGroup;


  constructor(private competencyframeworkService: CompetencyframeworkService, 
    private competencyDetailService: CompetencydetailService,
    private employeeCompetencyService: EmployeecompetencyService,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private http: HttpClient) { 
    }

  ngOnInit(): void {
    this.competencyForm = new FormGroup({
      EmployeeCommnet: new FormControl(null),
      ProofDocument: new FormControl(null)
    });

    this.bindCompetencyNoteByID();
    this.bindCompetencyNameByID();
  }

  tabs: any[] = [
    ];
  

  bindCompetencyNoteByID() {
    this.competencyframeworkService.findOne(this.route.snapshot.params['id']).subscribe(res=> {
      this.information = res.details;
 });
  }

  bindCompetencyNameByID() {
    this.competencyDetailService.findById(this.route.snapshot.params['id']).subscribe((resp : any) =>{
      if(resp){
        resp.map(x =>{
          this.tabs.push({
            title : x.competencyName
          });
        })
      }
    });
  }

  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
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
  }else if (/pdf/i.exec(mimeType)) {
    this.fileType =3;
  }else if (/excel/i.exec(mimeType)) {
    this.fileType = 2;
  }else {
    this.fileType = 4;
  }
  this.isUpload = true;
  return;
}

  onSubmit(data) {
    let formData = new FormData();
    formData.append('EmployeeCommnet', data.EmployeeCommnet);
    formData.append('Files', this.fileData);

    const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');

    this.http.post('http://localhost:30285/api/EmployeeCompetency', formData, {headers: headers})
    .subscribe(res => {
  
      alert('Uploaded!!');
    });
  }

  onSubmit(data) {
    let formData = new FormData();
    formData.append('EmployeeCommnet', data.EmployeeCommnet);
    formData.append('Files', this.fileData);

    const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');

    this.http.post('http://localhost:30285/api/EmployeeCompetency', formData, {headers: headers})
    .subscribe(res => {
  
      alert('Uploaded!!');
    });
  }


  onSelect(data: TabDirective): void {
    debugger;
   alert(data.heading);
  }
}
