import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetiersService } from 'src/app/services/metiers/metiers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-metierprofessionnelle',
  templateUrl: './metierprofessionnelle.component.html',
  styleUrls: ['./metierprofessionnelle.component.scss'],
})
export class MetierprofessionnelleComponent implements OnInit {

  metier : any
  searchText:any;
  image: string = environment.imageUrl
  p:number=1
  constructor(public service: MetiersService, private route: Router) { }

  ngOnInit() {
     //AFFICHER LA LISTE DES METIERS
     this.service.AfficherLaListeMetiers().subscribe(data => {
      this.metier = data;
    })
  }

   //METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAIL METIER
   goToDettailMetiers(id: number) {
    console.log(id);
    return this.route.navigate(['tab3/detailsmetiers', id])
  }

}
