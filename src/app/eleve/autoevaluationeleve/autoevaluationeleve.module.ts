import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoevaluationelevePageRoutingModule } from './autoevaluationeleve-routing.module';

import { AutoevaluationelevePage } from './autoevaluationeleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoevaluationelevePageRoutingModule
  ],
  declarations: [AutoevaluationelevePage]
})
export class AutoevaluationelevePageModule {}
