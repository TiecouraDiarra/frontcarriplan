import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pisteprofessionnel',
  templateUrl: './pisteprofessionnel.page.html',
  styleUrls: ['./pisteprofessionnel.page.scss'],
})
export class PisteprofessionnelPage implements OnInit {

  segmentValue = '1';
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

}
