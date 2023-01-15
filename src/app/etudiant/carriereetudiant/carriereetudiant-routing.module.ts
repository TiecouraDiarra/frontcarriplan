import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarriereetudiantPage } from './carriereetudiant.page';

const routes: Routes = [
  {
    path: '',
    component: CarriereetudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarriereetudiantPageRoutingModule {}
