import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptEtudiantPageRoutingModule } from './inscript-etudiant-routing.module';

import { InscriptEtudiantPage } from './inscript-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptEtudiantPageRoutingModule
  ],
  declarations: [InscriptEtudiantPage]
})
export class InscriptEtudiantPageModule {}
