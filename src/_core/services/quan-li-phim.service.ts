import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

//import HttpClient
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuanLiPhimService {

  constructor(private http: HttpClient) { }

  //observable
  layDanhSachPhim(): Observable<any>{
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06`;
    let observable = this.http.get(url).pipe(
      tap(
        // ket qua
        ()=>{},
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
    return observable; 
  }

  handleError(err){
    //handle Error:backend cung cấp để viết

    return err;
  }

}
