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

  constructor(private authService: AuthService, private storageService: StorageService,  private route: Router) { }

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
