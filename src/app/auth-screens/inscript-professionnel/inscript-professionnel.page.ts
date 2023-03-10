import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DomaineprofService } from 'src/app/services/domaineprof/domaineprof.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscript-professionnel',
  templateUrl: './inscript-professionnel.page.html',
  styleUrls: ['./inscript-professionnel.page.scss'],
})
export class InscriptProfessionnelPage implements OnInit {
  type = true;
  type1=true;
  domaines : any;

  form: any = {
    nomcomplet:null,
    numero:null,
    email:null,
    password:null,
    confirmpassword:null,
    domaine:null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService, private route: Router, private domaineService : DomaineprofService) { }

  ngOnInit() {
    //METHODE PERMETTANT D'AFFICHER LES DOMAINES DES PROFESSIONNELS
    this.domaineService.getalldomaineprof().subscribe(data =>{
      console.log(data)
      this.domaines = data;
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
      confirmpassword,domaine} = this.form;

    this.authService.inscriptionprofessionnel(nomcomplet,numero, email, password, confirmpassword, domaine.nomdomaine).subscribe({
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
    let timerInterval = 3000;
    Swal.fire({
      position:'center',
      text: 'Compte cre?? avec success!!',
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
      // if (result.isConfirmed) {
        this.route.navigateByUrl('/connexion', {skipLocationChange: true}).then(() => {
          this.route.navigate(["/connexion"])
        })
      // }
    })

  }

}
