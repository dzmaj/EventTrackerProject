import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/jobs'


  public index(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error loading jobs');
      })
    );
  }


}
