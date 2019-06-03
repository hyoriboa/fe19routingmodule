import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

let Api = '';

const httpOptions = {
  headers: new HttpHeaders({
    "content-type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    //gan lai ben environment.ts
    Api = environment.urlApi;
  }

  get(uri: string): Observable<any>{
    return this.http.get(Api + "/" + uri).pipe(
      tap(
        // ket qua
        ()=>{
          //define load page render api
          
          //define toast thong bao
        },
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
  }

  post(uri: string, data?: Object): Observable<any>{
    return this.http.post(Api + "/" + uri, data, httpOptions).pipe(
      tap(
        ()=>{},
        catchError(err => {
          return this.handleError(err);
        })
      )
    )
  }


  handleError(err){
    //handle Error:backend cung cấp để viết

    return err;
  }
}
