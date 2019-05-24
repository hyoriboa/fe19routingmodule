import { Component, OnInit, Input } from '@angular/core';
import { moveEmbeddedView } from '@angular/core/src/view';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {

  @Input() phim;

  constructor() { }

  ngOnInit() {
  }

}
