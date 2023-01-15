import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarriereelevePage } from './carriereeleve.page';

const routes: Routes = [
  {
    path: '',
    component: CarriereelevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarriereelevePageRoutingModule {}
