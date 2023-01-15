import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoprofessionnelPageRoutingModule } from './autoprofessionnel-routing.module';

import { AutoprofessionnelPage } from './autoprofessionnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoprofessionnelPageRoutingModule
  ],
  declarations: [AutoprofessionnelPage]
})
export class AutoprofessionnelPageModule {}
