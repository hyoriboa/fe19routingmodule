import { Component, OnInit } from '@angular/core';

//import
import {PhimService} from './../../../_core/services/phim.service';
import { QuanLiPhimService } from './../../../_core/services/quan-li-phim.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  danhSachPhim = [];

  constructor(private phimService: PhimService, private quanLyPhimService: QuanLiPhimService) { }

  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim(){
    //lấy dánh sách phim từ PhimService
    // this.danhSachPhim = this.phimService.layDanhSachPhim();
    // console.log(this.danhSachPhim);

    //lấy dữ liệu từ server backend
    this.quanLyPhimService.layDanhSachPhim().subscribe((data: any) => {
      console.log(data);
      this.danhSachPhim = data;
    });
    
  }

}
