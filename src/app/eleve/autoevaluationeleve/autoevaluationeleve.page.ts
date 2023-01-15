import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autoevaluationeleve',
  templateUrl: './autoevaluationeleve.page.html',
  styleUrls: ['./autoevaluationeleve.page.scss'],
})
export class AutoevaluationelevePage implements OnInit {

  constructor() { }
  etape: string = "etape1"; // default button

  ngOnInit() {
  }
  
}
