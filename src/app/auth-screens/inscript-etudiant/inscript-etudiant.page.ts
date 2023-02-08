import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SerieetudiantService } from 'src/app/services/serieetudiant/serieetudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscript-etudiant',
  templateUrl: './inscript-etudiant.page.html',
  styleUrls: ['./inscript-etudiant.page.scss'],
})
export class InscriptEtudiantPage implements OnInit {

  type = true;
  type1= true;
  series : any
  form: any = {
    nomcomplet:null,
    numero:null,
    email:null,
    password:null,
    confirmpassword:null,
    serie:null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService, private route: Router, private serieService : SerieetudiantService) { }

  ngOnInit() {

    //METHODE PERMETTANT D'AFFICHER LES SERIES DES BACHELIERS
    this.serieService.getallserieetudiant().subscribe(data =>{
      console.log(data)
      this.series = data;
    })
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
      confirmpassword, serie} = this.form;
console.log(serie)
    this.authService.inscriptionetudiant(nomcomplet,numero, email, password, confirmpassword, serie.nomserie).subscribe({
      next: data => {
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
    Swal.fire({
      position:'center',
      text: 'Compte creé avec success!!',
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
