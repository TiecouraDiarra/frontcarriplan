import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarriereprofessionnelPage } from './carriereprofessionnel.page';

const routes: Routes = [
  {
    path: '',
    component: CarriereprofessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarriereprofessionnelPageRoutingModule {}
