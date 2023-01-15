import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoetudiantPage } from './autoetudiant.page';

const routes: Routes = [
  {
    path: '',
    component: AutoetudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoetudiantPageRoutingModule {}
