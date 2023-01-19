import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsparcoursPageRoutingModule } from './detailsparcours-routing.module';

import { DetailsparcoursPage } from './detailsparcours.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsparcoursPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [DetailsparcoursPage]
})
export class DetailsparcoursPageModule {}
