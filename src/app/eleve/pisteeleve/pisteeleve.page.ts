import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pisteeleve',
  templateUrl: './pisteeleve.page.html',
  styleUrls: ['./pisteeleve.page.scss'],
})
export class PisteelevePage implements OnInit {

  segmentValue = '1';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }
}
