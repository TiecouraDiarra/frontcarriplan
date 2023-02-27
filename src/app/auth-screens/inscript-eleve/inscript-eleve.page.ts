import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscript-eleve',
  templateUrl: './inscript-eleve.page.html',
  styleUrls: ['./inscript-eleve.page.scss'],
})
export class InscriptElevePage implements OnInit {
  
  type = true;
  type1 = true;
  form: any = {
    nomcomplet:null,
    numero:null,
    email:null,
    password:null,
    confirmpassword:null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

    //METHODE PERMETTANT DE CHANGER LE TYPE DE L'ICON EYE DANS LE CHAMP MOT DE PASSE
  changeType() {
    this.type = !this.type;
  }
  //METHODE PERMETTANT DE CHANGER LE TYPE DE L'ICON EYE DANS LE CHAMP MOT DE PASSE
  changeType1() {
    this.type1 = !this.type1;
  }


  back(): void {
    window.history.back()
  }

  onSubmit(): void {
    const {  nomcomplet,
      numero,
      email,
      password,
      confirmpassword} = this.form;

    this.authService.inscriptioneleve(nomcomplet,numero, email, password, confirmpassword).subscribe({
      next: data => {
        // if (this.isSuccessful=true) {
        //   this.route.navigateByUrl('/connexion');
        // }
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

  popUp() {
    let timerInterval = 3000;
    Swal.fire({
      position:'center',
      text: 'Compte creé avec success!!',
      icon:'success',
      heightAuto: false,
      showConfirmButton: false,
      // confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false,
      timer: timerInterval, // ajouter le temps d'attente
      timerProgressBar: true // ajouter la barre de progression du temps
      
    }).then((result) => {
        this.route.navigateByUrl('/connexion', {skipLocationChange: true}).then(() => {
          this.route.navigate(["/connexion"])
        })
    })

  }
}
