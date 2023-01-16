import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-autoevaluationeleve',
  templateUrl: './autoevaluationeleve.page.html',
  styleUrls: ['./autoevaluationeleve.page.scss'],
})
export class AutoevaluationelevePage implements OnInit {

  userForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}
  etape: string = "etape1"; // default button

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  
}
