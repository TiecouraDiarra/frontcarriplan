import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsautoevaluationelevePageRoutingModule } from './detailsautoevaluationeleve-routing.module';

import { DetailsautoevaluationelevePage } from './detailsautoevaluationeleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsautoevaluationelevePageRoutingModule
  ],
  declarations: [DetailsautoevaluationelevePage]
})
export class DetailsautoevaluationelevePageModule {}
