import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export abstract class APIService<T, ID> implements CrudOperations<T, ID>{
  protected _apiEndpoint : string  = environment.apiEndpoint;
  constructor(protected _http: HttpClient,protected _endPoint: string) { 
    this._apiEndpoint = `${this._apiEndpoint}/${_endPoint}`; 
  }
    post(t: T): Observable<T> {
      return this._http.post<T>(this._apiEndpoint, t);
    }
  
    update(id: ID, t: T): Observable<T> {
      return this._http.put<T>(this._apiEndpoint + "/" + id, t, {});
    }
  
    findOne(id: ID): Observable<T> {
      return this._http.get<T>(this._apiEndpoint + "/" + id);
    }
  
    findAll(): Observable<T[]> {
      return this._http.get<T[]>(this._apiEndpoint)
    }
  
    delete(id: ID): Observable<T> {
      return this._http.delete<T>(this._apiEndpoint + '/' + id);
    }
}

export interface CrudOperations<T, ID> {
	post(t: T): Observable<T>;
	update(id: ID, t: T): Observable<T>;
	findOne(id: ID): Observable<T>;
	findAll(): Observable<T[]>;
	delete(id: ID): Observable<any>;
}