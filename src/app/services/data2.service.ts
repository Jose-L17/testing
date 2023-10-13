import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  constructor(private http: HttpClient ) { }

  apiUrl = 'http://localhost:8080/size';

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type' : 'application/json'
    })
  }

  getSize() : Observable <any> {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

  handleError(error: any) {
    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status} \n Message: ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
