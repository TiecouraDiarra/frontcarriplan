import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-profileleve',
  templateUrl: './profileleve.page.html',
  styleUrls: ['./profileleve.page.scss'],
})
export class ProfilelevePage implements OnInit {

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
