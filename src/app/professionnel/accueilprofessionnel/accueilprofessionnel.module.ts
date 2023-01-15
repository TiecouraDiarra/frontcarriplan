import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilprofessionnelPageRoutingModule } from './accueilprofessionnel-routing.module';

import { AccueilprofessionnelPage } from './accueilprofessionnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilprofessionnelPageRoutingModule
  ],
  declarations: [AccueilprofessionnelPage]
})
export class AccueilprofessionnelPageModule {}
