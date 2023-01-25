import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilprofessionnelPage } from './profilprofessionnel.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilprofessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilprofessionnelPageRoutingModule {}
