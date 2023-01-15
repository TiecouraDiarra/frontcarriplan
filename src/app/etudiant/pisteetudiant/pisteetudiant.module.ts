import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisteetudiantPageRoutingModule } from './pisteetudiant-routing.module';

import { PisteetudiantPage } from './pisteetudiant.page';
import { FiliereetudiantComponent } from './filiereetudiant/filiereetudiant.component';
import { MetieretudiantComponent } from './metieretudiant/metieretudiant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisteetudiantPageRoutingModule
  ],
  declarations: [PisteetudiantPage, FiliereetudiantComponent,MetieretudiantComponent]
})
export class PisteetudiantPageModule {}
