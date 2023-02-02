import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';

@Component({
  selector: 'app-detailsautoevaluationetudiant',
  templateUrl: './detailsautoevaluationetudiant.page.html',
  styleUrls: ['./detailsautoevaluationetudiant.page.scss'],
})
export class DetailsautoevaluationetudiantPage implements OnInit {

  id:any
  Auto: any
  parcours : any

  option={
    slidesPervView:1.5,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
  } 

  constructor(private route: ActivatedRoute, private service : AutoevaluationService) { }

  ngOnInit() {
    //RECUPERER L'ID AUTO
    this.id=this.route.snapshot.params["id"]
    this.service.RetrouverParIdAuto(this.id).subscribe(data=>{
      this.Auto=data;
      console.log(data);
      this.parcours = this.Auto.parcours
      console.log(this.Auto.parcours);
    })
  }

  back(): void {
    window.history.back()
  }

}
