import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptElevePageRoutingModule } from './inscript-eleve-routing.module';

import { InscriptElevePage } from './inscript-eleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptElevePageRoutingModule
  ],
  declarations: [InscriptElevePage]
})
export class InscriptElevePageModule {}
