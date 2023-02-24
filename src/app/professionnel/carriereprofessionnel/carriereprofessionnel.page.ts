import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { ParcoursService } from 'src/app/services/parcours/parcours.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carriereprofessionnel',
  templateUrl: './carriereprofessionnel.page.html',
  styleUrls: ['./carriereprofessionnel.page.scss'],
})
export class CarriereprofessionnelPage implements OnInit {
  User: any
  parcours: any
  auto: any[];
  totaleformation: number = 0;
  image: string = environment.imageUrl
  @ViewChild(IonSlides) slides: IonSlides;

  Parcours1: any

  formation:any
  slidesDidLoad(event: Event) {
    this.slides = (event.target as unknown as IonSlides);
    this.slides.startAutoplay();
  }

  nextSlide() {
    this.slides.slideNext();
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  constructor(private authService: AuthService, private storageService: StorageService, private auService: AutoevaluationService, private route: Router, private parcoursservice: ParcoursService) { }

  ngOnInit() {
    this.User = this.storageService.getUser()
    console.log(this.User)

    this.authService.RecupererIdEtudiant(this.User.id).subscribe(data => {
      this.Parcours1 = data,
        console.log(this.Parcours1);
        console.log(this.Parcours1.domaineProf.nomdomaine);

        this.parcoursservice.AfficherFormationParDomaine(this.Parcours1.domaineProf.nomdomaine).subscribe(data=>{
          this.formation = data;
          console.log(this.formation);
          for (const t of this.formation) {
            this.totaleformation += 1;
          }
        })
        

    })

    //AFFICHER LA LISTE DES AUTO EVALUATION PAR UTILISATEUR
    this.auService.AfficherLaListeAutoUser(this.User.id).subscribe(data => {
      this.auto = data;
      console.log(this.auto)
    })

    //AFFICHER LES IMAGES DES FORMATIONS
    this.parcoursservice.afficherImageFormation().subscribe(data => {
      this.parcours = data;
      console.log(this.parcours)
    })

  }

  option = {
    slidesPervView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
  }
  option1 = {
    slidesPervView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
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

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAILS AUTOEVALUATION
  goToDettailAuto(id: number) {
    console.log(id);
    return this.route.navigate(['tab3/detailsautoevaluationprofessionnel', id])
  }

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAILS PARCOURS
  goToDettailParcours(id: number) {
    console.log(id);
    return this.route.navigate(['tab3/detailsparcours', id])
  }

  ionViewWillEnter() {
    this.User = this.storageService.getUser()
     //AFFICHER LA LISTE DES AUTO EVALUATION PAR UTILISATEUR
    this.auService.AfficherLaListeAutoUser(this.User.id).subscribe(data => {
      this.auto = data;
      console.log(this.auto)
    })
  }
}
