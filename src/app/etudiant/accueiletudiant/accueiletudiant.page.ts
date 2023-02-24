import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-accueiletudiant',
  templateUrl: './accueiletudiant.page.html',
  styleUrls: ['./accueiletudiant.page.scss'],
})
export class AccueiletudiantPage implements OnInit {

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit() {
  }

  option={
    slidesPervView:1.5,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
  }

  
  //METHODE PERMETTANT DE SE DECONNECTER
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
