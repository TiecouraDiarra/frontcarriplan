import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParcoursService } from 'src/app/services/parcours/parcours.service';

@Component({
  selector: 'app-eprofessionnelle',
  templateUrl: './eprofessionnelle.component.html',
  styleUrls: ['./eprofessionnelle.component.scss'],
})
export class EprofessionnelleComponent implements OnInit {

  parcours: any;
  searchText:any;
  constructor(public service: ParcoursService, private route: Router) { }

  ngOnInit() {
     //AFFICHER LA LISTE DES PARCOURS DES ECOLES PROFESSIONNELES
     this.service.getParcoursEcoleProfessionnelle().subscribe(data => {
      this.parcours = data;
    })
  }

  goToDettailParcours(id: number) {
    console.log(id);
    return this.route.navigate(['tabs/detailsparcours', id])
  }

}
