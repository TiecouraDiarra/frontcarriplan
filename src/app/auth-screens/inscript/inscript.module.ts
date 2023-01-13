import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptPageRoutingModule } from './inscript-routing.module';

import { InscriptPage } from './inscript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptPageRoutingModule
  ],
  declarations: [InscriptPage]
})
export class InscriptPageModule {}
