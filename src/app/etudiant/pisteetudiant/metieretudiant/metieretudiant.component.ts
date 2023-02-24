import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetiersService } from 'src/app/services/metiers/metiers.service';
import { ParcoursService } from 'src/app/services/parcours/parcours.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-metieretudiant',
  templateUrl: './metieretudiant.component.html',
  styleUrls: ['./metieretudiant.component.scss'],
})
export class MetieretudiantComponent implements OnInit {

  metier : any
  p:number=1
  searchText:any;
  image: string = environment.imageUrl
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
    return this.route.navigate(['tab2/detailsmetiers', id])
  }

}
