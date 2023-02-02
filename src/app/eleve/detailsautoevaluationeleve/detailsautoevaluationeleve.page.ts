import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';

@Component({
  selector: 'app-detailsautoevaluationeleve',
  templateUrl: './detailsautoevaluationeleve.page.html',
  styleUrls: ['./detailsautoevaluationeleve.page.scss'],
})
export class DetailsautoevaluationelevePage implements OnInit {

  constructor(private route: ActivatedRoute, private service : AutoevaluationService) { }
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
