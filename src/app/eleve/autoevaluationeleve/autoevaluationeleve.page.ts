import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-autoevaluationeleve',
  templateUrl: './autoevaluationeleve.page.html',
  styleUrls: ['./autoevaluationeleve.page.scss'],
})
export class AutoevaluationelevePage implements OnInit {

  userForm!: FormGroup;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}
  etape: string = "etape1"; // default button

  ngOnInit() {
    
  }
  
}
