import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CompetencyframeworkService } from '../services/competencyframework.service';


@Component({
  selector: 'app-add-competency-framework',
  templateUrl: './add-competency-framework.component.html',
  styleUrls: ['./add-competency-framework.component.css']
})
export class AddCompetencyFrameworkComponent implements OnInit {
  form: FormGroup;
  competencyFrameworkID: number;
  title = 'Create';
  errorMessage: any;
  isOpen = false;

  constructor(private router: Router, private toastr: ToastrService,
              private competencyframeworkService: CompetencyframeworkService) {
}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      details: new FormControl('', Validators.required),
      isActive: new FormControl(false)
    });
  }

  // tslint:disable-next-line:typedef
  get f(){
    return this.form.controls;
  }
  // tslint:disable-next-line:typedef
  submit(){
    this.competencyframeworkService.post(this.form.value).subscribe(res => {
      this.toastr.success('Record Added Successfully');
      this.router.navigateByUrl('/competencyframework');
    });
  }
}


