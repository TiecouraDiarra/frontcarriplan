import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoevaluationprofessionnelPageRoutingModule } from './autoevaluationprofessionnel-routing.module';

import { AutoevaluationprofessionnelPage } from './autoevaluationprofessionnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoevaluationprofessionnelPageRoutingModule
  ],
  declarations: [AutoevaluationprofessionnelPage]
})
export class AutoevaluationprofessionnelPageModule {}
