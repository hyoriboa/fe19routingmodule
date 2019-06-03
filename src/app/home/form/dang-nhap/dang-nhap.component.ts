import {
  Component,
  OnInit,
  ViewChild,
  HostListener
} from '@angular/core';
import {
  UserService
} from 'src/_core/services/user.service';
import {
  DataService
} from 'src/_core/services/data.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  //Dom den component va dat ten bien
  @ViewChild("formDangNhap") formDangNhap: NgForm;

  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  @HostListener("window: beforeunload", ["$event"])
  canDeactivate($event):boolean {
    return this.formDangNhap.submitted || !this.formDangNhap.dirty;
  }



  DangNhap(value) {

    // this.userService.loginUser(value.taiKhoan, value.matKhau).subscribe((data:any) => {
    //   console.log(data);
    //   if(data === "Tài khoản hoặc mật khẩu không đúng !"){
    //     alert(data);
    //   } else {
    //     alert("Dang nhap thanh cong");
    //   }
    // });

    // let TaiKhoan = value.taiKhoan;
    // let MatKhau = value.matKhau;

    // const uri = `/QuanLyNguoiDung/DangNhap?TaiKhoan=${TaiKhoan}&MatKhau=${MatKhau}`;
    const uri = `/QuanLyNguoiDung/DangNhap?TaiKhoan=${value.taiKhoan}&MatKhau=${value.matKhau}`;
    this.dataService.post(uri).subscribe((data: any) => {
      if (data === "Tài khoản hoặc mật khẩu không đúng !") {
        alert(data);
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        alert("Dang nhap thanh cong");
      }
    });

  }

}
