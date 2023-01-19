import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery'

@Component({
  selector: 'app-valid',
  templateUrl: './valid.page.html',
  styleUrls: ['./valid.page.scss'],
  animations: [
    trigger('stepState', [
      state('current', style({ opacity: 1 })),
      state('next', style({ opacity: 0, left: '50%' })),
      state('prev', style({ opacity: 0, left: '-50%' })),
      transition('current => next', animate('800ms ease-in-out')),
      transition('current => prev', animate('800ms ease-in-out'))
    ])
  ]
})
export class ValidPage implements OnInit {
  formStep = 'step1';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
