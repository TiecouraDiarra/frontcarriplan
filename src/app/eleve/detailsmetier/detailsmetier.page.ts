import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailsmetier',
  templateUrl: './detailsmetier.page.html',
  styleUrls: ['./detailsmetier.page.scss'],
})
export class DetailsmetierPage implements OnInit {

  constructor() { }
  p:number=1;

  ngOnInit() {
  }

  back(): void {
    window.history.back()
  }

}
