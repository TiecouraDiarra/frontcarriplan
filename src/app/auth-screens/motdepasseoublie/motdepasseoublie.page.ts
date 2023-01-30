import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-motdepasseoublie',
  templateUrl: './motdepasseoublie.page.html',
  styleUrls: ['./motdepasseoublie.page.scss'],
})
export class MotdepasseoubliePage implements OnInit {

  type = true;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  form:any ={
    email : null
  }

  constructor(private authService : AuthService, private route: Router) { }

  ngOnInit() {
  }

  //REINITIALISER LE MOT DE PASSE
  onSubmit(): void {
    const {email} = this.form;
    this.authService.reinitialisermotdepasse(email).subscribe({
      next: data =>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.popUp();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    }); 
  }

  changeType() {
    this.type = !this.type;
  }
  
  back(): void {
    window.history.back()
  }

  popUp() {
    Swal.fire({
      position:'center',
      text: 'Mot de passe réinitialisé avec succès!! \n Veuillez verifier votre boite email ',
      icon:'success',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigateByUrl('/connexion', {skipLocationChange: true}).then(() => {
          this.route.navigate(["/connexion"])
        })
      }
    })

  }
}
