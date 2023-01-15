import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PisteetudiantPage } from './pisteetudiant.page';

const routes: Routes = [
  {
    path: '',
    component: PisteetudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PisteetudiantPageRoutingModule {}
