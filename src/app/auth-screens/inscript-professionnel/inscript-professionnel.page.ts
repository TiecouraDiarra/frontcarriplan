import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscript-professionnel',
  templateUrl: './inscript-professionnel.page.html',
  styleUrls: ['./inscript-professionnel.page.scss'],
})
export class InscriptProfessionnelPage implements OnInit {
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
