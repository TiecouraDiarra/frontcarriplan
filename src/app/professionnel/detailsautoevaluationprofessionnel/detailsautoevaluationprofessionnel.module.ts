import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsautoevaluationprofessionnelPageRoutingModule } from './detailsautoevaluationprofessionnel-routing.module';

import { DetailsautoevaluationprofessionnelPage } from './detailsautoevaluationprofessionnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsautoevaluationprofessionnelPageRoutingModule
  ],
  declarations: [DetailsautoevaluationprofessionnelPage]
})
export class DetailsautoevaluationprofessionnelPageModule {}
