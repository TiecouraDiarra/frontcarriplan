import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarriereelevePageRoutingModule } from './carriereeleve-routing.module';

import { CarriereelevePage } from './carriereeleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarriereelevePageRoutingModule
  ],
  declarations: [CarriereelevePage]
})
export class CarriereelevePageModule {}
