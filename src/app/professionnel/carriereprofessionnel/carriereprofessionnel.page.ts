import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { ParcoursService } from 'src/app/services/parcours/parcours.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-carriereprofessionnel',
  templateUrl: './carriereprofessionnel.page.html',
  styleUrls: ['./carriereprofessionnel.page.scss'],
})
export class CarriereprofessionnelPage implements OnInit {
  User : any
  parcours : any
  auto : any[];

  constructor(private authService: AuthService, private storageService: StorageService, private auService : AutoevaluationService, private route : Router, private parcoursservice : ParcoursService) { }

  ngOnInit() {
    this.User = this.storageService.getUser()
    console.log(this.User)

    //AFFICHER LA LISTE DES AUTO EVALUATION PAR UTILISATEUR
    this.auService.AfficherLaListeAutoUser(this.User.id).subscribe(data=>{
      this.auto = data;
      console.log(this.auto)
    })

    //AFFICHER LA LISTE DES AUTO EVALUATION PAR UTILISATEUR
    this.parcoursservice.afficherImageUniversite().subscribe(data=>{
      this.parcours = data;
      console.log(this.parcours)
    })

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

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE SUIVANYE
  goToDettailAuto(id: number) {
    console.log(id);
    return this.route.navigate(['tab3/detailsautoevaluationprofessionnel', id])
  }

}
