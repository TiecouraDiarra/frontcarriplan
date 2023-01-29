import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-carriereetudiant',
  templateUrl: './carriereetudiant.page.html',
  styleUrls: ['./carriereetudiant.page.scss'],
})
export class CarriereetudiantPage implements OnInit {

  User : any
  auto : any

  counter = 0;

  incrementCounter() {
    this.counter++;
  }
  constructor(private authService: AuthService, private storageService: StorageService, private auService : AutoevaluationService) { }

  ngOnInit() {
    this.User = this.storageService.getUser()
    console.log(this.User)
    this.auService.AfficherLaListeAutoUser(this.User.id).subscribe(data=>{
      this.auto = data;
      this.incrementCounter();
      console.log(this.auto)
    })
  }
  
  // cat: string = "men"; 

  //POUR LE SLIDE
  option={
    slidesPervView:1.5,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
  }


  //METHODE PERMETTANT DE SE DECONNECTER
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }


}
