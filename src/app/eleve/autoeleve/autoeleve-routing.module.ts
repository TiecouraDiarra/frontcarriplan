import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoelevePage } from './autoeleve.page';

const routes: Routes = [
  {
    path: '',
    component: AutoelevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoelevePageRoutingModule {}
