import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifprofileleve',
  templateUrl: './modifprofileleve.page.html',
  styleUrls: ['./modifprofileleve.page.scss'],
})
export class ModifprofilelevePage implements OnInit {

  type = true;
  type1 = true;
  type2 = true;
  cat: string = "profil";
  User: any
  roles: string[] = [];

  form: any

  forme: any = {
    ancienmdp: null,
    nouveaumdp: null,
    confirmNewmdp: null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  message: string | undefined;

  constructor(private storageService: StorageService, private route: Router, private auService: AutoevaluationService, private authService: AuthService) { 
    this.User = this.storageService.getUser();
    this.form = {
      nomcomplet: this.User.nomcomplet,
      numero: this.User.numero,
      email: this.User.email,
    };
  }

  ngOnInit() {
    this.roles = this.storageService.getUser().roles;
    this.User = this.storageService.getUser();
  }

  //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
  }

  //METHODE PERMETTANT DE CHANGER LE TYPE DE L'ICON EYE DANS LE CHAMP MOT DE PASSE
  changeType() {
    this.type = !this.type;
  }
  //METHODE PERMETTANT DE CHANGER LE TYPE DE L'ICON EYE DANS LE CHAMP MOT DE PASSE
  changeType1() {
    this.type1 = !this.type1;
  }

  //METHODE PERMETTANT DE CHANGER LE TYPE DE L'ICON EYE DANS LE CHAMP MOT DE PASSE
  changeType2() {
    this.type2 = !this.type2;
  }

  //METHODE PERMETTANT DE MODIFIER LE PROFIL D'UN ELEVE
  ModifierEleve() {
    const { nomcomplet,
      numero,
      email } = this.form;
    this.authService.modifier(nomcomplet, numero, email, this.User.id).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    }
      
    )
  }
  //POPUP PERMETTANT DE CONFIRMER LA MODIFICATION DU PROFIL 
  popUpModifProfil() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      // title: 'Etes-vous sûre de vous déconnecter?',
      text: "Etes-vous sûre de modifier votre profil ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer',
      cancelButtonText: 'Annuler',
      // reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Modification effectuée avec succès !',
          'Tes pistes sont prêtes',
          'success',);
          this.ModifierEleve();
        this.route.navigateByUrl('/tabs/profileleve', { skipLocationChange: true }).then(() => {
          this.route.navigate(["/tabs/profileleve"])
        })
      } 
    })

  }

  //METHODE PERMETTANT DE MODIFIER LE MOT DE PASSE D'UN ELEVE
  ModifierMdpEleve(): void {
    const { ancienmdp,
      nouveaumdp,
      confirmNewmdp } = this.form;
    this.authService.modifierMotDePasse(ancienmdp, nouveaumdp, confirmNewmdp, this.User.numero).subscribe({
      next: data => {
        if (this.isSuccessful = true) {
          this.route.navigateByUrl('/tab2/profiletudiant');
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    }
    )
  }

  //POPUP PERMETTANT DE CONFIRMER LA MODIFICATION DU MOT DE PASSE 
  popUpModifMdpEleve() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      // title: 'Etes-vous sûre de vous déconnecter?',
      text: "Etes-vous sûre de modifier votre profil ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer',
      cancelButtonText: 'Annuler',
      // reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Modification effectuée avec succès !',
          'success',);
          this.ModifierMdpEleve();
        this.route.navigateByUrl('/tabs/profileleve', { skipLocationChange: true }).then(() => {
          this.route.navigate(["/tabs/profileleve"])
        })
      } 
    })

  }


  

}
