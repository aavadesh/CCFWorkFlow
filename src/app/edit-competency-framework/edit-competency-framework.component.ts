import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompetencyframeworkService } from '../services/competencyframework.service';
import { CompetencyFramework } from '../competencyframework/class/competencyframewokr';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-competency-framework',
  templateUrl: './edit-competency-framework.component.html',
  styleUrls: ['./edit-competency-framework.component.css']
})
export class EditCompetencyFrameworkComponent implements OnInit {

  id: number;
  cf: CompetencyFramework;
  form: FormGroup;

  constructor( public competencyframeworkService: CompetencyframeworkService,
               private route: ActivatedRoute, private toastr: ToastrService,
               private router: Router) { }

  ngOnInit(): void {
    debugger
    this.id = this.route.snapshot.params.id;
    this.competencyframeworkService.findOne(this.id).subscribe((data: CompetencyFramework) => {
      this.cf = data;
    });
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      details: new FormControl('', Validators.required),
      isactive: new FormControl(false)
    });
  }

  // tslint:disable-next-line:typedef
  get f(){
    return this.form.controls;
  }

  // tslint:disable-next-line:typedef
  submit(){
    console.log(this.form.value);
    debugger;
    this.competencyframeworkService.update(this.id, this.form.value).subscribe(res => {
      this.toastr.success('Record Updated Successfully');
      this.router.navigateByUrl('/competencyframework');
    });
  }

}
