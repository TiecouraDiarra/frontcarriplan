import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoprofessionnelPage } from './autoprofessionnel.page';

const routes: Routes = [
  {
    path: '',
    component: AutoprofessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoprofessionnelPageRoutingModule {}
