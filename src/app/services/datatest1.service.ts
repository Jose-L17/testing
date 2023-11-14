import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  apiURL = 'https://apicv-service-jose-l17.cloud.okteto.net/';

  httpoptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  obtenerDatos1():Observable<any>{
    return this.http.get<any>(this.apiURL+'test1',this.httpoptions)
  }

  obtenerDatos2():Observable<any>{
    return this.http.get<any>(this.apiURL+'test2',this.httpoptions)
  }

  obtenerDatos3():Observable<any>{
    return this.http.get<any>(this.apiURL+'test3',this.httpoptions)
  }

  obtenerDatos4():Observable<any>{
    return this.http.get<any>(this.apiURL+'test4',this.httpoptions)
  }

}
