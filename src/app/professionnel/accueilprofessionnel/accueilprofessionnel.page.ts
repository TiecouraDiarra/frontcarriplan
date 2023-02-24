import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-accueilprofessionnel',
  templateUrl: './accueilprofessionnel.page.html',
  styleUrls: ['./accueilprofessionnel.page.scss'],
})
export class AccueilprofessionnelPage implements OnInit {

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
