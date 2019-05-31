import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { FormComponent } from './form.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';

const routes: Routes = [

    {
        path: "",
        component: FormComponent,
        children: [
            //Dang ki
            {
                path:"",
                component: DangKyComponent
            },

            {
                path:"dang-ky",
                component: DangKyComponent
            },

            //Dang nhap
            {
                path:"dang-nhap",
                component: DangNhapComponent
            },

        ]
    },


        
];

@NgModule({
    // forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
