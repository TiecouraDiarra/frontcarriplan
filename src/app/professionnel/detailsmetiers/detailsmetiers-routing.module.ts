import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsmetiersPage } from './detailsmetiers.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsmetiersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsmetiersPageRoutingModule {}
