import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoevaluationprofessionnelPage } from './autoevaluationprofessionnel.page';

const routes: Routes = [
  {
    path: '',
    component: AutoevaluationprofessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoevaluationprofessionnelPageRoutingModule {}
