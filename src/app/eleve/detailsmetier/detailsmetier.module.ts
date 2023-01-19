import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsmetierPageRoutingModule } from './detailsmetier-routing.module';

import { DetailsmetierPage } from './detailsmetier.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsmetierPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [DetailsmetierPage]
})
export class DetailsmetierPageModule {}
