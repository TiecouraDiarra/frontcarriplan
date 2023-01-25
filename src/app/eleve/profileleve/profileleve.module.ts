import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilelevePageRoutingModule } from './profileleve-routing.module';

import { ProfilelevePage } from './profileleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilelevePageRoutingModule
  ],
  declarations: [ProfilelevePage]
})
export class ProfilelevePageModule {}
