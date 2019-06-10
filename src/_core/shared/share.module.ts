import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }

//share module ra nhiều chỗ dc, component thì ko
//trong module decla thi phai export