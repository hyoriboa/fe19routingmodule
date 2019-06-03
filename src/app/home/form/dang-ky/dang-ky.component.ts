import {
  Component,
  OnInit,
  ViewChild,
  HostListener
} from '@angular/core';

import {
  UserService
} from './../../../../_core/services/user.service';
import { DataService } from 'src/_core/services/data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {


  //Dom den component va dat ten bien
  @ViewChild("formDangKy") formDangKy: NgForm;

  constructor(private userService: UserService,
    private dataService: DataService) {}

  ngOnInit() {}

  @HostListener("window: beforeunload", ["$event"])
  canDeactivate($event):boolean {
    return this.formDangKy.submitted || !this.formDangKy.dirty;
  }


  DangKy(value) {

    const objUser = {
      TaiKhoan: value.taiKhoan,
      MatKhau: value.matKhau,
      Email: value.email,
      SoDT: value.soDT,
      MaNhom: "GP06",
      MaLoaiNguoiDung: "KhachHang",
    }

    // this.userService.registerUser(objUser).subscribe((data:any) => {
    //   console.log(data);
    //   if(data === "Tài khoản đã tồn tại"){
    //     alert(data);
    //   } else {
    //     alert("Đăng kí thành công");
    //   }
    // });

    const uri = `/QuanLyNguoiDung/ThemNguoiDung`;
    this.dataService.post(uri, objUser).subscribe((data:any) => {
      console.log(data);
      if(data === "Tài khoản đã tồn tại"){
        alert(data);
      } else {
        alert("Đăng kí thành công");
      }
    });

  }

}
