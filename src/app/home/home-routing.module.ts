import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';


const routes: Routes = [

    //home
    {path: "", 
    component: HomeComponent, 
    children: [
        //trang chủ:
        {path: "", component: TrangChuComponent},
        {path: "home", component: TrangChuComponent},
        
        //danh sách phim
        {path: "danh-sach-phim", component: DanhSachPhimComponent},

        //tin tức
        {path: "tin-tuc", component: TinTucComponent},
        
        
    ]}
    
];

@NgModule({
    // forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
