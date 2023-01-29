import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifprofilelevePageRoutingModule } from './modifprofileleve-routing.module';

import { ModifprofilelevePage } from './modifprofileleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifprofilelevePageRoutingModule
  ],
  declarations: [ModifprofilelevePage]
})
export class ModifprofilelevePageModule {}
