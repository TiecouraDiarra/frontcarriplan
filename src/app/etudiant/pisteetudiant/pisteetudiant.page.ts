import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-pisteetudiant',
  templateUrl: './pisteetudiant.page.html',
  styleUrls: ['./pisteetudiant.page.scss'],
})
export class PisteetudiantPage implements OnInit {

  segmentValue = '1';

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit() {
  }

  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
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
