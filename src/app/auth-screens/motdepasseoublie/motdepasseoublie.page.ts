import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-motdepasseoublie',
  templateUrl: './motdepasseoublie.page.html',
  styleUrls: ['./motdepasseoublie.page.scss'],
})
export class MotdepasseoubliePage implements OnInit {

  type = true;

  form:any ={
    email : null
  }

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  //REINITIALISER LE MOT DE PASSE
  onSubmit(): void {
    const {email} = this.form;
    this.authService.reinitialisermotdepasse(email).subscribe(data =>(
      console.log(data)
    ))
  }

  changeType() {
    this.type = !this.type;
  }
  
  back(): void {
    window.history.back()
  }
}
