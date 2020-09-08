import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValueService extends APIService<Value, number> {
  constructor(protected _http: HttpClient) {
    super(_http, "api/Values");
  }
}

export class Value {
  public test:string[];
}