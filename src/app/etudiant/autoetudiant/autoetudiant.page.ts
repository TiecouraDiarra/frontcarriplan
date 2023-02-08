import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-autoetudiant',
  templateUrl: './autoetudiant.page.html',
  styleUrls: ['./autoetudiant.page.scss'],
})
export class AutoetudiantPage implements OnInit {

  roles: string[] = [];
  User : any

  autorecentefiliere:any
  autorecenteemetier:any
  totalefiliereproposee: number = 0;
  private refreshData = false;

  option={
    slidesPervView:1.5,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
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

    //AFFICHER AUTO RECENTE ETUDIANT FILIERE APRES AUTOEVALUATION EFFECTUEE
    this.service.Autorecenteetudiant(this.User.id).subscribe(data=>{
      this.autorecentefiliere = data;
      console.log(this.autorecentefiliere);
      for (const t of this.autorecentefiliere) {
        this.totalefiliereproposee += 1;
      }
    })
    // this.ionViewWillEnter();
  }

  ionViewDidEnter() {
    if (this.refreshData) {
      // Code pour actualiser les données nécessaires pour la page
      this.service.Autorecenteetudiant(this.User.id).subscribe(data=>{
        this.autorecentefiliere = data;
        console.log(this.autorecentefiliere);
        
      })
      this.refreshData = false;
    }
  }
 
  ionViewWillLeave() {
    this.refreshData = true;
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
