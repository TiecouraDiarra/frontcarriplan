import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParcoursService } from 'src/app/services/parcours/parcours.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-formationprofessionnelle',
  templateUrl: './formationprofessionnelle.component.html',
  styleUrls: ['./formationprofessionnelle.component.scss'],
})
export class FormationprofessionnelleComponent implements OnInit {

parcours:any
searchText:any;
p:number=1
image: string = environment.imageUrl

  constructor(public service: ParcoursService, private route: Router) { }

  ngOnInit() {
    //AFFICHER LA LISTE DES PARCOURS DE L'UNIVERSITE
    this.service.getFormationProf().subscribe(data => {
      this.parcours = data;
    })
  }

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE SUIVANYE
  goToDettailParcours(id: number) {
    console.log(id);
    return this.route.navigate(['tab3/detailsparcours', id])
  }

}
