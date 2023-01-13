import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptProfessionnelPageRoutingModule } from './inscript-professionnel-routing.module';

import { InscriptProfessionnelPage } from './inscript-professionnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptProfessionnelPageRoutingModule
  ],
  declarations: [InscriptProfessionnelPage]
})
export class InscriptProfessionnelPageModule {}
