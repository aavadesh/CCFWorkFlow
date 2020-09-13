import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Employeecompetency } from '../competencyframeworddetail/employeecompetency';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeecompetencyService extends APIService<Employeecompetency, number> {
  constructor(protected _http: HttpClient) {
    super(_http, "api/EmployeeCompetency");
  }
}
