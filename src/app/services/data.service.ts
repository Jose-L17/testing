import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor(private http: HttpClient ) { }

  apiUrl = 'https://apicv-service-jose-l17.cloud.okteto.net/hours';

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type' : 'application/json'
    })
  }

  getHours() : Observable <any> {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }


}
