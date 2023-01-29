import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifprofilprofessionnelPageRoutingModule } from './modifprofilprofessionnel-routing.module';

import { ModifprofilprofessionnelPage } from './modifprofilprofessionnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifprofilprofessionnelPageRoutingModule
  ],
  declarations: [ModifprofilprofessionnelPage]
})
export class ModifprofilprofessionnelPageModule {}
