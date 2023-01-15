import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilprofessionnelPage } from './accueilprofessionnel.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilprofessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilprofessionnelPageRoutingModule {}
