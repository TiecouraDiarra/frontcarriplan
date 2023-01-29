import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth/auth.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  User: any

  phrase: string = "";
  initials: string;

  constructor(private authService: AuthService, private storageService: StorageService, private route: Router) {
    this.phrase = this.storageService.getUser().nomcomplet;
    this.initials = this.getInitials(this.phrase);
  }


  ngOnInit() {
    this.User = this.storageService.getUser();
    console.log(this.User);
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
