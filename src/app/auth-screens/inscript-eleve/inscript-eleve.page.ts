import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscript-eleve',
  templateUrl: './inscript-eleve.page.html',
  styleUrls: ['./inscript-eleve.page.scss'],
})
export class InscriptElevePage implements OnInit {
  
  type = true;

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
