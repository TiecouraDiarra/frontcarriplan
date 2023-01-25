import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiletudiantPageRoutingModule } from './profiletudiant-routing.module';

import { ProfiletudiantPage } from './profiletudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiletudiantPageRoutingModule
  ],
  declarations: [ProfiletudiantPage]
})
export class ProfiletudiantPageModule {}
