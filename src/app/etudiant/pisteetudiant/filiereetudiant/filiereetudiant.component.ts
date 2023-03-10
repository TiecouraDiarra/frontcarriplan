import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParcoursService } from 'src/app/services/parcours/parcours.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filiereetudiant',
  templateUrl: './filiereetudiant.component.html',
  styleUrls: ['./filiereetudiant.component.scss'],
})
export class FiliereetudiantComponent implements OnInit {

  parcours: any;
  p:number=1
  searchText:any;
  image: string = environment.imageUrl
  constructor(public service: ParcoursService, private route: Router) { }

  ngOnInit() {
     //AFFICHER LA LISTE DES PARCOURS DE L'UNIVERSITE
     this.service.getParcoursUniversite().subscribe(data => {
      this.parcours = data;
    })
  }

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE SUIVANYE
  goToDettailParcours(id: number) {
    console.log(id);
    return this.route.navigate(['tab2/detailsparcours', id])
  }

}
