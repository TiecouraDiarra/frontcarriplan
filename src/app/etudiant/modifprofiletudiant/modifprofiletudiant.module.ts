import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifprofiletudiantPageRoutingModule } from './modifprofiletudiant-routing.module';

import { ModifprofiletudiantPage } from './modifprofiletudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifprofiletudiantPageRoutingModule
  ],
  declarations: [ModifprofiletudiantPage]
})
export class ModifprofiletudiantPageModule {}
