import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifprofilprofessionnelPage } from './modifprofilprofessionnel.page';

const routes: Routes = [
  {
    path: '',
    component: ModifprofilprofessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifprofilprofessionnelPageRoutingModule {}
