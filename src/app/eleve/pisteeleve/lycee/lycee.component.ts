import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { env } from 'process';
import { ParcoursService } from 'src/app/services/parcours/parcours.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lycee',
  templateUrl: './lycee.component.html',
  styleUrls: ['./lycee.component.scss'],
})
export class LyceeComponent implements OnInit {
  image: string = environment.imageUrl
  parcours: any;
  searchText:any;
  constructor(public service: ParcoursService, private route: Router) { }

  ngOnInit() {
    //AFFICHER LA LISTE DES PARCOURS DU LYCEE
    this.service.getParcoursEleve().subscribe(data => {
      this.parcours = data;
      console.log(this.parcours)
      console.log(this.image+""+this.parcours[0].imageparcours)
    })

    
  }

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE SUIVANYE
  goToDettailParcours(id: number) {
    console.log(id);
    return this.route.navigate(['tabs/detailsparcours', id])
  }

}
