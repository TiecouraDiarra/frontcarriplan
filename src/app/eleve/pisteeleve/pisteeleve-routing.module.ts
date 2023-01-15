import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PisteelevePage } from './pisteeleve.page';

const routes: Routes = [
  {
    path: '',
    component: PisteelevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PisteelevePageRoutingModule {}
