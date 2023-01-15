import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoetudiantPageRoutingModule } from './autoetudiant-routing.module';

import { AutoetudiantPage } from './autoetudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoetudiantPageRoutingModule
  ],
  declarations: [AutoetudiantPage]
})
export class AutoetudiantPageModule {}
