import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptPage } from './inscript.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptPageRoutingModule {}
