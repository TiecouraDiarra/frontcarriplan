import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsautoevaluationetudiantPageRoutingModule } from './detailsautoevaluationetudiant-routing.module';

import { DetailsautoevaluationetudiantPage } from './detailsautoevaluationetudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsautoevaluationetudiantPageRoutingModule
  ],
  declarations: [DetailsautoevaluationetudiantPage]
})
export class DetailsautoevaluationetudiantPageModule {}
