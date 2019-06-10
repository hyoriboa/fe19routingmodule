import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  //mỗi trang có 1 store riêng

  //lay danh sach phim: la array
  listDanhSachPhim = new BehaviorSubject([] as any);
  shareListDanhSachPhim = this.listDanhSachPhim.asObservable();

  //lay chi tier phim la obj nen tra ve {}
  // chiTietPhim = new BehaviorSubject({} as any);
  chiTietPhim = new BehaviorSubject({} as Object);
  shareChiTietPhim = this.chiTietPhim.asObservable();

  constructor() { }

  shareingDataListDanhSachPhim(listPhim){
    this.listDanhSachPhim.next(listPhim);
  }

  shareingDataChiTietPhim(phim){
    this.chiTietPhim.next(phim);
  }

}
