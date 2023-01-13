import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscript-etudiant',
  templateUrl: './inscript-etudiant.page.html',
  styleUrls: ['./inscript-etudiant.page.scss'],
})
export class InscriptEtudiantPage implements OnInit {

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
