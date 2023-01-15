import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueiletudiantPage } from './accueiletudiant.page';

const routes: Routes = [
  {
    path: '',
    component: AccueiletudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueiletudiantPageRoutingModule {}
