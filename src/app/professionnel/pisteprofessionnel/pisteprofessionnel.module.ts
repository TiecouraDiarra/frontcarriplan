import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisteprofessionnelPageRoutingModule } from './pisteprofessionnel-routing.module';

import { PisteprofessionnelPage } from './pisteprofessionnel.page';
import { FormationprofessionnelleComponent } from './formationprofessionnelle/formationprofessionnelle.component';
import { MetierprofessionnelleComponent } from './metierprofessionnelle/metierprofessionnelle.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisteprofessionnelPageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [PisteprofessionnelPage, FormationprofessionnelleComponent, MetierprofessionnelleComponent]
})
export class PisteprofessionnelPageModule {}
