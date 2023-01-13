import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptElevePage } from './inscript-eleve.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptElevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptElevePageRoutingModule {}
