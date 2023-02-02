import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-autoeleve',
  templateUrl: './autoeleve.page.html',
  styleUrls: ['./autoeleve.page.scss'],
})
export class AutoelevePage implements OnInit {
  roles: string[] = [];
  User : any
  parcourslycee:any
  parcoursecoleprofessionnel:any

  option={
    slidesPervView:1.5,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
  }
  @ViewChild(IonSlides) slides: IonSlides;


  constructor(private authService: AuthService, private storageService: StorageService, private service: AutoevaluationService, private route: Router) { }
  p:number=1;
  pi:number=1;
  autorecentelycee:any
  autorecenteeprof:any


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

  ngOnInit() {
    this.roles = this.storageService.getUser().roles;
    this.User = this.storageService.getUser()
    console.log(this.User)

    //AFFICHER PARCOURS LYCEE APRES AUTOEVALUATION EFFECTUEE
    // this.service.AfficherParcoursLycce(this.User.id).subscribe(data=>{
    //   this.parcourslycee = data;
    //   console.log(this.parcourslycee)
    // })

    //AFFICHER AUTO RECENTE LYCEE APRES AUTOEVALUATION EFFECTUEE
    this.service.AutoRecenteLycee(this.User.id).subscribe(data=>{
      this.autorecentelycee = data;
      console.log(this.autorecentelycee)
    })

    //AFFICHER AUTO RECENTE ECOLE PROFESSIONNELLE APRES AUTOEVALUATION EFFECTUEE
    this.service.AutoRecenteeProf(this.User.id).subscribe(data=>{
      this.autorecenteeprof = data;
      console.log(this.autorecenteeprof)
    })

    //AFFICHER PARCOURS LYCEE APRES AUTOEVALUATION EFFECTUEE
    // this.service.AfficherParcoursEcoleProfessionnelle(this.User.id).subscribe(data=>{
    //   this.parcoursecoleprofessionnel = data;
    //   console.log(this.parcoursecoleprofessionnel)
    // })
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
  goToDettailParcours(id: number) {
    console.log(id);
    return this.route.navigate(['tabs/detailsparcours', id])
  }

}
