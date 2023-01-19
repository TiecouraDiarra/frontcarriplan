import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidPageRoutingModule } from './valid-routing.module';

import { ValidPage } from './valid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidPageRoutingModule
  ],
  declarations: [ValidPage]
})
export class ValidPageModule {}
