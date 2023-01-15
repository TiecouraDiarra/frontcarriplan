import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PisteprofessionnelPage } from './pisteprofessionnel.page';

const routes: Routes = [
  {
    path: '',
    component: PisteprofessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PisteprofessionnelPageRoutingModule {}
