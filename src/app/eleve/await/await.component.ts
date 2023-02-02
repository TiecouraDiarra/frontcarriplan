import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-await',
  templateUrl: './await.component.html',
  styleUrls: ['./await.component.scss'],
})
export class AwaitComponent implements OnInit {

  constructor(private loadingCtrl : LoadingController,private router : Router) { }

  ngOnInit() {
     setTimeout(() => {
    this.router.navigate(['/tabs/autoeleve'])
  }, 1000);
  }

 

  //  Loading fonction
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Patientez...',
      duration: 3000,
      spinner: 'circles',
      
    });
    loading.present();
  }


}
