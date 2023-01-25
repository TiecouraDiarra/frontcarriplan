import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilelevePage } from './profileleve.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilelevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilelevePageRoutingModule {}
