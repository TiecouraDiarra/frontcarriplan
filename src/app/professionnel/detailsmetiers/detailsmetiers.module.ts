import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsmetiersPageRoutingModule } from './detailsmetiers-routing.module';

import { DetailsmetiersPage } from './detailsmetiers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsmetiersPageRoutingModule
  ],
  declarations: [DetailsmetiersPage]
})
export class DetailsmetiersPageModule {}
