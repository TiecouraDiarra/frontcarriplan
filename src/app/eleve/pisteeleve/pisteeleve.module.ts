import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisteelevePageRoutingModule } from './pisteeleve-routing.module';

import { PisteelevePage } from './pisteeleve.page';
import { LyceeComponent } from "./lycee/lycee.component";
import { EprofessionnelleComponent } from './eprofessionnelle/eprofessionnelle.component';

@NgModule({
        
        declarations: [PisteelevePage,LyceeComponent, EprofessionnelleComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PisteelevePageRoutingModule,
    ]
})
export class PisteelevePageModule {}
