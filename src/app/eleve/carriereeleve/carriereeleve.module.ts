import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarriereelevePageRoutingModule } from './carriereeleve-routing.module';

import { CarriereelevePage } from './carriereeleve.page';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule, ReactiveFormsModule, MatFormFieldModule,
    CarriereelevePageRoutingModule
  ],
  declarations: [CarriereelevePage]
})
export class CarriereelevePageModule {}
