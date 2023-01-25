import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsparcoursPage } from './detailsparcours.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsparcoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsparcoursPageRoutingModule {}
