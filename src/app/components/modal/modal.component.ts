import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  phim:any;

  constructor(
    private shareDateService: ShareDataService
  ) { }

  ngOnInit() {
    this.shareDateService.shareChiTietPhim.subscribe(data => {
      console.log(data);
      this.phim = data;
    })
  }

}
