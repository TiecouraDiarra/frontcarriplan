import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoelevePageRoutingModule } from './autoeleve-routing.module';

import { AutoelevePage } from './autoeleve.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoelevePageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [AutoelevePage]
})
export class AutoelevePageModule {}
