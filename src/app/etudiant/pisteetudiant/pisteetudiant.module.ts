import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisteetudiantPageRoutingModule } from './pisteetudiant-routing.module';

import { PisteetudiantPage } from './pisteetudiant.page';
import { FiliereetudiantComponent } from './filiereetudiant/filiereetudiant.component';
import { MetieretudiantComponent } from './metieretudiant/metieretudiant.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisteetudiantPageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [PisteetudiantPage, FiliereetudiantComponent,MetieretudiantComponent]
})
export class PisteetudiantPageModule {}
