import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { FormComponent } from './form.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { CanDeActivateGuard, CanDeActivateDangNhapGuard } from 'src/_core/guards/can-de-activate.guard';

const routes: Routes = [

    {
        path: "",
        component: FormComponent,
        children: [
            //Dang ki
            // {
            //     path:"",
            //     component: DangKyComponent
            // },
            {
                path:"",
                component: DangKyComponent,
                canDeactivate: [CanDeActivateGuard]
            },

            {
                path:"dang-ky",
                component: DangKyComponent
            },

            //Dang nhap
            {
                path:"dang-nhap",
                component: DangNhapComponent,
                canDeactivate: [CanDeActivateDangNhapGuard]

            },

        ]
    },


        
];

@NgModule({
    // forChild
  imports: [RouterModule.forChild(routes)],
//   cung cấp CanDeActivateGuard và CanDeActivateDangNhapGuard đúng routing nó dùng hoặc thêm Injectable 
//vào trên class
//   providers: [CanDeActivateGuard, CanDeActivateDangNhapGuard],
  exports: [RouterModule]
})
export class FormRoutingModule { }
