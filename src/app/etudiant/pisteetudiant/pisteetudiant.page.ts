import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pisteetudiant',
  templateUrl: './pisteetudiant.page.html',
  styleUrls: ['./pisteetudiant.page.scss'],
})
export class PisteetudiantPage implements OnInit {

  segmentValue = '1';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }
}
