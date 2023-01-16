import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoevaluationelevePage } from './autoevaluationeleve.page';
import { EtapeeleveComponent } from './etapeeleve/etapeeleve.component';

const routes: Routes = [
  {
    path: '',
    component: AutoevaluationelevePage
  },
  {
    path:"detailspays",
    component:EtapeeleveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoevaluationelevePageRoutingModule {}
