import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoevaluationelevePageRoutingModule } from './autoevaluationeleve-routing.module';

import { AutoevaluationelevePage } from './autoevaluationeleve.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoevaluationelevePageRoutingModule,
    MatStepperModule, ReactiveFormsModule, MatFormFieldModule
  ],
  declarations: [AutoevaluationelevePage]
})
export class AutoevaluationelevePageModule {}
