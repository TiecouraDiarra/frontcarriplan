import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarriereetudiantPageRoutingModule } from './carriereetudiant-routing.module';

import { CarriereetudiantPage } from './carriereetudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarriereetudiantPageRoutingModule
  ],
  declarations: [CarriereetudiantPage]
})
export class CarriereetudiantPageModule {}
