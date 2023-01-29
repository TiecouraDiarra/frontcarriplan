import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profilprofessionnel',
  templateUrl: './profilprofessionnel.page.html',
  styleUrls: ['./profilprofessionnel.page.scss'],
})
export class ProfilprofessionnelPage implements OnInit {

  User : any
  auto : any

  counter = 0;

  incrementCounter() {
    this.counter++;
  }
  roles: string[] = [];

  constructor(private storageService: StorageService,private route: Router, private auService : AutoevaluationService, private authService: AuthService) { }

  ngOnInit() {
    this.roles = this.storageService.getUser().roles;
    this.User = this.storageService.getUser()
    console.log(this.User)

    //AFFICHER LA LISTE DES AUTOEVALUATIONS FAITES PAR L'UTILISATEUR CONNECTE
    this.auService.AfficherLaListeAutoUser(this.User.id).subscribe(data=>{
      this.auto = data;
      this.incrementCounter();
      console.log(this.auto)
    })
  }

  //METHODE PERMETTANT DE SE DECONNECTER
    logout(): void {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger',
        },
        heightAuto: false
      })
      swalWithBootstrapButtons.fire({
        // title: 'Etes-vous sûre de vous déconnecter?',
        text: "Etes-vous sûre de vous déconnecter?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer',
        cancelButtonText: 'Annuler',
        // reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.authService.logout().subscribe({
            next: res => {
              console.log(res);
              this.storageService.clean();
              this.route.navigateByUrl("/connexion")
            },
            error: err => {
              console.log(err);
            }
          });
        }
      })
      
    }
}
