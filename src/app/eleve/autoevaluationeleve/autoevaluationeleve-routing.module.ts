import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoevaluationelevePage } from './autoevaluationeleve.page';

const routes: Routes = [
  {
    path: '',
    component: AutoevaluationelevePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoevaluationelevePageRoutingModule {}
