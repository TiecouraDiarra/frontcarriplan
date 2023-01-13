import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motdepasseoublie',
  templateUrl: './motdepasseoublie.page.html',
  styleUrls: ['./motdepasseoublie.page.scss'],
})
export class MotdepasseoubliePage implements OnInit {

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
