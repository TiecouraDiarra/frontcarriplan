import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MetiersService } from 'src/app/services/metiers/metiers.service';
import { ParcoursService } from 'src/app/services/parcours/parcours.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detailsmetier',
  templateUrl: './detailsmetier.page.html',
  styleUrls: ['./detailsmetier.page.scss'],
})
export class DetailsmetierPage implements OnInit {

  constructor(public service : MetiersService, private route:ActivatedRoute, private router: Router, private authService: AuthService, private storageService: StorageService) { }
  p:number=1;
  image: string = environment.imageUrl
  metier : any
  id:any

  ngOnInit() {
    //RECUPERER L'ID DU METIER
    this.id=this.route.snapshot.params["id"]
    this.service.RetrouverParIdMetiers(this.id).subscribe(data=>{
      this.metier=data;
      console.log(data);
    })
  }

  //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
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
