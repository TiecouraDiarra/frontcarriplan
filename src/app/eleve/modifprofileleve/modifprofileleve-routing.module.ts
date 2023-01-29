import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifprofilelevePage } from './modifprofileleve.page';

const routes: Routes = [
  {
    path: '',
    component: ModifprofilelevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifprofilelevePageRoutingModule {}
