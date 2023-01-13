import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilelevePageRoutingModule } from './accueileleve-routing.module';

import { AccueilelevePage } from './accueileleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilelevePageRoutingModule
  ],
  declarations: [AccueilelevePage]
})
export class AccueilelevePageModule {}
