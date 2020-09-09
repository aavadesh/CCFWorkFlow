import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Competencydetail } from '../competencyframeworddetail/competencydetail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetencydetailService extends APIService<Competencydetail, number> {
  constructor(protected _http: HttpClient) {
    super(_http, "api/CompetencyDetail");
  }

  findById(id: number): Observable<Competencydetail[]> {
    return this._http.get<Competencydetail[]>(this._apiEndpoint + "/GetCompetencyNameByFrameworkID" + "/" + id)
  }
}
