import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detailsautoevaluationprofessionnel',
  templateUrl: './detailsautoevaluationprofessionnel.page.html',
  styleUrls: ['./detailsautoevaluationprofessionnel.page.scss'],
})
export class DetailsautoevaluationprofessionnelPage implements OnInit {

  id:any
  Auto: any
  parcours : any
  totaleformationproposee: number = 0;
  image: string = environment.imageUrl

  option={
    slidesPervView:1.5,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
  } 


  constructor(private router:Router,private route: ActivatedRoute, private service : AutoevaluationService) { }

  ngOnInit() {
     //RECUPERER L'ID AUTO
     this.id=this.route.snapshot.params["id"]
     this.service.RetrouverParIdAuto(this.id).subscribe(data=>{
       this.Auto=data;
       console.log(data);
       this.parcours = this.Auto.parcours
       console.log(this.Auto.parcours);
       for (const t of this.parcours) {
         this.totaleformationproposee += 1;
       }
     })
  }

  //LA METHODE PERMETTANT DE RETOURNER A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
  }

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE SUIVANTE
  goToDettailParcours(id: number) {
    console.log(id);
    return this.router.navigate(['tab3/detailsparcours', id])
  }


}
