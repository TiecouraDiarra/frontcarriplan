import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carriereeleve',
  templateUrl: './carriereeleve.page.html',
  styleUrls: ['./carriereeleve.page.scss'],
})
export class CarriereelevePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cat: string = "men"; // default button

  option={
    slidesPervView:1.5,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
  }

  @ViewChild('popover') popover:any;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
