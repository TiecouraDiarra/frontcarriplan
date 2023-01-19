import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidPage } from './valid.page';

const routes: Routes = [
  {
    path: '',
    component: ValidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidPageRoutingModule {}
