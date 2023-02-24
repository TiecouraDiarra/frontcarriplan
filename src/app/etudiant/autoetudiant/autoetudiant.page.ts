import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-autoetudiant',
  templateUrl: './autoetudiant.page.html',
  styleUrls: ['./autoetudiant.page.scss'],
})
export class AutoetudiantPage implements OnInit {

  roles: string[] = [];
  User: any
  autoevaluationsEffectuees: number = 0;
  image: string = environment.imageUrl

  autorecentefiliere: any
  autorecenteemetier: any
  totalefiliereproposee: number = 0;
  private refreshData = false;

  option = {
    slidesPervView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
  }

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private service: AutoevaluationService,
    private route: Router) { }

  ngOnInit() {
    this.roles = this.storageService.getUser().roles;
    this.User = this.storageService.getUser()
    console.log(this.User)

    //this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.User = this.storageService.getUser()
    console.log(this.User)
    //AFFICHER AUTO RECENTE ETUDIANT FILIERE APRES AUTOEVALUATION EFFECTUEE
    this.service.Autorecenteetudiant(this.User.id).subscribe(data => {
      this.autorecentefiliere = data;
      console.log(this.autorecentefiliere);
      this.totalefiliereproposee = data.length
      // for (const t of this.autorecentefiliere) {
      //   this.totalefiliereproposee += 1;
      // }
    })

    //AFFICHER LA LISTE DES AUTO EVALUATION PAR UTILISATEUR
    this.service.AfficherLaListeAutoUser(this.User.id).subscribe(data => {
      // this.auto = data;
      this.autoevaluationsEffectuees = data.length
      // console.log(this.auto)
    })
  }



  // ionViewWillEnter() {
  //     this.route.navigateByUrl('/tab2/autoetudiant', { skipLocationChange: true }).then(() => {
  //       this.route.navigate(["/tab2/autoetudiant"])
  //     });
  //   }

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE SUIVANYE
  goToDettailParcours(id: number) {
    console.log(id);
    return this.route.navigate(['tab2/detailsparcours', id])
  }
}
