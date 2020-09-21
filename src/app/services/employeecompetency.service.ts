import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Employeecompetency } from '../competencyframeworddetail/employeecompetency';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeecompetencyService extends APIService<
  Employeecompetency,
  number
> {
  constructor(protected _http: HttpClient) {
    super(_http, 'api/EmployeeCompetency');
  }

  edit(emp: FormData) {
    var empID = emp.get('EmployeeCompetencyID');
    const params = new HttpParams().set('Id', empID.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.put<Employeecompetency>(
      this._apiEndpoint + '/' + empID.toString(),
      emp,
      { headers, params }
    );
  }
}
