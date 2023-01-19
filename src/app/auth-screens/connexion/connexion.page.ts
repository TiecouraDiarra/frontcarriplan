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
  numeromdp: string;
  psw: string;
  submitted = false;
  

  constructor() { }

  ngOnInit() {
  }
  

  submitForm() {
    console.log('Nom :', this.numeromdp);
    console.log('Adresse e-mail :', this.psw);
  }

  changeType() {
    this.type = !this.type;
  }
}
