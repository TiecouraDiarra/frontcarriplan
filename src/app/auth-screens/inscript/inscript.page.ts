import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscript',
  templateUrl: './inscript.page.html',
  styleUrls: ['./inscript.page.scss'],
})
export class InscriptPage implements OnInit {

  type = true;

  eleve:any;

  constructor() { }

  ngOnInit() {
  }

  changeType() {
    this.type = !this.type;
  }
  back(): void {
    window.history.back()
  }

}
