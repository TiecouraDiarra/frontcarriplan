import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParcoursService } from 'src/app/services/parcours/parcours.service';

@Component({
  selector: 'app-lycee',
  templateUrl: './lycee.component.html',
  styleUrls: ['./lycee.component.scss'],
})
export class LyceeComponent implements OnInit {

  parcours: any;
  constructor(public service: ParcoursService, private route: Router) { }

  ngOnInit() {
    //AFFICHER LA LISTE DES PARCOURS DU LYCEE
    this.service.getParcoursEleve().subscribe(data => {
      this.parcours = data;
    })
  }

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE SUIVANYE
  goToDettailParcours(id: number) {
    console.log(id);
    return this.route.navigate(['tabs/detailsparcours', id])
  }

}
