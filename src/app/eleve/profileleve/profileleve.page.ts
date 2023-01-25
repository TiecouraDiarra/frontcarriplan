import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-profileleve',
  templateUrl: './profileleve.page.html',
  styleUrls: ['./profileleve.page.scss'],
})
export class ProfilelevePage implements OnInit {

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit() {
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
