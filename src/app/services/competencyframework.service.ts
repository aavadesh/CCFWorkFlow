import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { CompetencyFramework } from '../competencyframework/class/competencyframewokr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetencyframeworkService extends APIService<CompetencyFramework, number> {
  constructor(protected _http: HttpClient) {
    super(_http, "api/CompetencyFramework");
  }
}

