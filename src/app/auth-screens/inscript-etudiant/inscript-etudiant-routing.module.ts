import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptEtudiantPage } from './inscript-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptEtudiantPageRoutingModule {}
