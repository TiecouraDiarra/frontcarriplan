import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  // form!: FormGroup;
  type = true;

  constructor() { }

  ngOnInit() {
  }


  changeType() {
    this.type = !this.type;
  }
}
