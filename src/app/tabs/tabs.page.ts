import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth/auth.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showEleveBoard = false;
  showEtudiantBoard = false;
  showProfessionnelBoard = false;
  username?: string;

  constructor(private storageService: StorageService, private authService: AuthService,  private route: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showEleveBoard = this.roles.includes('ROLE_ELEVE');
      this.showEtudiantBoard = this.roles.includes('ROLE_ETUDIANT');
      this.showProfessionnelBoard = this.roles.includes('ROLE_PROFESSIONNEL');

      this.username = user.username;
    }
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
