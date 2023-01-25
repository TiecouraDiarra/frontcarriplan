import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilprofessionnelPageRoutingModule } from './profilprofessionnel-routing.module';

import { ProfilprofessionnelPage } from './profilprofessionnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilprofessionnelPageRoutingModule
  ],
  declarations: [ProfilprofessionnelPage]
})
export class ProfilprofessionnelPageModule {}
