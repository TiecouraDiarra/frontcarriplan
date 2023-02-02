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

  User: any

  phrase: string = "";
  initials: string;

  constructor(private storageService: StorageService, private authService: AuthService,  private route: Router, private alertController: AlertController) {
    this.phrase = this.storageService.getUser().nomcomplet;
    this.initials = this.getInitials(this.phrase);
   }

  ngOnInit() {
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
            //  window.location.reload();
            this.route.navigateByUrl("/connexion")
          },
          error: err => {
            console.log(err);
          }
        });
      }
    })
    
  }

  //METHODE PERMETTANT DE RECUPERER LES INITIALS DE L'UTILISATEUR CONNECTE
  getInitials(phrase: string): string {
    let words = phrase.split(" ");
    let initials = "";
    words.forEach(word => {
      initials += word[0];
    });
    return initials;
  }

}
