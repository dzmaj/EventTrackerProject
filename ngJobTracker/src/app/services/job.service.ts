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


  index(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error loading jobs');
      })
    );
  }

  create(job: Job): Observable<Job> {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    return this.http.post<Job>(this.url, job, httpOptions)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error creating job');
      })
    );
  }

  public update(job: Job): Observable<Job> {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    return this.http.put<Job>(this.url + '/' + job.id, job, httpOptions)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error updating job');
      })
    );
  }

  public delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error deleting todo');
      })
    );
  }
}
