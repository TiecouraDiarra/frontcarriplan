import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarriereprofessionnelPageRoutingModule } from './carriereprofessionnel-routing.module';

import { CarriereprofessionnelPage } from './carriereprofessionnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarriereprofessionnelPageRoutingModule
  ],
  declarations: [CarriereprofessionnelPage]
})
export class CarriereprofessionnelPageModule {}
