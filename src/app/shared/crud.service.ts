import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private baseUrl = 'http://localhost:30285/api/CompetencyFramework';
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {this.headers = new HttpHeaders({ 'Content-Type': 'application/json' }); }

  get(id: number, entity: object): Observable<any> {
    return this.http.get(`${this.baseUrl+entity}/${id}`);
  }

  create(obj: Object, entity: object): Observable<Object> {
    return this.http.post(`${this.baseUrl+entity}`, obj);
  }

  update(id: number, value: any, entity: object): Observable<Object> {
    return this.http.put(`${this.baseUrl+entity}/${id}`, value);
  }

  delete(id: number, entity: object): Observable<any> {
    return this.http.delete(`${this.baseUrl+entity}/${id}`, { responseType: 'text' });
  }

  getList(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}`)
    .pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }
}