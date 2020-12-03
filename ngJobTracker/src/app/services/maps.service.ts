import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  center = {
    lat: undefined,
    long: undefined
  }
  private baseUrl = 'https://maps.googleapis.com/maps/api/';
  private geocodeUrl = this.baseUrl + 'geocode/json?address='
  private key = 'AIzaSyBHmCXr5IdHwRvUCAvA_cmXjJadZe0Ldzw'
  private testAddress = 'Denver, CO'

  constructor(private http: HttpClient) { }



  getGeocode(place: string) {
    // console.log(place);
    // let encodedStr = encodeURIComponent(place);
    console.log(place);
    return this.http.get<Object>(this.geocodeUrl + place + '&key=' + this.key).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error loading jobs');
      })
    );
  }



}
