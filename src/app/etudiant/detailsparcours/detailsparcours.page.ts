import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonTabs, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ParcoursService } from 'src/app/services/parcours/parcours.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detailsparcours',
  templateUrl: './detailsparcours.page.html',
  styleUrls: ['./detailsparcours.page.scss'],
})
export class DetailsparcoursPage implements OnInit {

  parcours : any
  metier : any
  matiere : any
  id :  any
  p:number=1
  image: string = environment.imageUrl

  option={
    slidesPervView:1.5,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
  }

  constructor(private navCtrl: NavController,
    public service : ParcoursService, 
    private route:ActivatedRoute, 
    private router: Router, 
    private authService: AuthService, 
    private storageService: StorageService,
    private tabs: IonTabs) { }

    // removeTabFocus() {
    //   this.navCtrl.navigateRoot('/pisteetudiant');
    // }

  ngOnInit() {
    
    //RECUPERER L'ID DU PARCOURS
    this.id=this.route.snapshot.params["id"]
    this.service.RetrouverParIdParcours(this.id).subscribe(data=>{
      this.parcours=data;
      console.log(data);
      // this.removeTabFocus();
    })
    

     //RECUPERER LES METIERS EN FONCTION D'UN PARCOURS
     this.service.RecupererMetierParParcours(this.id).subscribe(data => {
      this.metier = data;
    })

     //RECUPERER LES MATIERES EN FONCTION D'UN PARCOURS
     this.service.RecupererMatiereParParcours(this.id).subscribe(data => {
      this.matiere = data;
    })
  }
  //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
    // this.navCtrl.back();
    // this.router.navigate(['tab2/pisteetudiant'])
  }

  //METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAIL METIER
  goToDettailMetiers(id: number) {
    console.log(id);
    return this.router.navigate(['tab2/detailsmetiers', id])
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
