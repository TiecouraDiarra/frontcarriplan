import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilelevePage } from './accueileleve.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilelevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilelevePageRoutingModule {}
