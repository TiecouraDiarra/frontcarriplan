import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loadingpage',
  templateUrl: './loadingpage.page.html',
  styleUrls: ['./loadingpage.page.scss'],
})
export class LoadingpagePage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    return await loading.present();

  }


}
