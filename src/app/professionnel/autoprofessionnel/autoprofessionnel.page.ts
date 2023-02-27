import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-autoprofessionnel',
  templateUrl: './autoprofessionnel.page.html',
  styleUrls: ['./autoprofessionnel.page.scss'],
})
export class AutoprofessionnelPage implements OnInit {

  roles: string[] = [];
  User: any
  auto : any
  image: string = environment.imageUrl
  autoevaluationsEffectuees: number = 0;

  autorecenteformation: any
  autorecenteemetier: any
  totaleformationproposee: number = 0;
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
    private service: AutoevaluationService,
    private storageService: StorageService,
    private route: Router) { }

  ngOnInit() {
    this.roles = this.storageService.getUser().roles;
    this.User = this.storageService.getUser()
    console.log(this.User)

   
  }
  ionViewWillEnter() {
    this.roles = this.storageService.getUser().roles;
    this.User = this.storageService.getUser()
     //AFFICHER AUTO RECENTE ETUDIANT FILIERE APRES AUTOEVALUATION EFFECTUEE
     this.service.AutorecenteProfessionnel(this.User.id).subscribe(data => {
      this.autorecenteformation = data;
      console.log(this.autorecenteformation);
      for (const t of this.autorecenteformation) {
        this.totaleformationproposee += 1;
      }
    })

    //AFFICHER LA LISTE DES AUTO EVALUATION PAR UTILISATEUR
    this.service.AfficherLaListeAutoUser(this.User.id).subscribe(data => {
      this.auto = data;
      this.autoevaluationsEffectuees = data.length
      console.log(this.auto)
    })
  }

  // ionViewDidEnter() {
  //   if (this.refreshData) {
  //     this.service.AutorecenteProfessionnel(this.User.id).subscribe(data => {
  //       this.autorecenteformation = data;
  //       console.log(this.autorecenteformation);

  //     })
  //     this.refreshData = false;
  //   }
  // }

  // ionViewWillLeave() {
  //   this.refreshData = true;
  // }

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
  goToDettailParcours(id: number) {
    console.log(id);
    return this.route.navigate(['tab3/detailsparcours', id])
  }

}
