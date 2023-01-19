import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsmetierPage } from './detailsmetier.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsmetierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsmetierPageRoutingModule {}
