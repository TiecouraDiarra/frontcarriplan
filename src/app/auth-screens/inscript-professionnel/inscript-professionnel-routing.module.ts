import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptProfessionnelPage } from './inscript-professionnel.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptProfessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptProfessionnelPageRoutingModule {}
