import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailsparcours',
  templateUrl: './detailsparcours.page.html',
  styleUrls: ['./detailsparcours.page.scss'],
})
export class DetailsparcoursPage implements OnInit {

  constructor() { }
  p:number=1;

  ngOnInit() {
  }

  
  back(): void {
    window.history.back()
  }
}
