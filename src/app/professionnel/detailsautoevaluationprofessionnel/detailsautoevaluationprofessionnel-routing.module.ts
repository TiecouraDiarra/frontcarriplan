import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsautoevaluationprofessionnelPage } from './detailsautoevaluationprofessionnel.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsautoevaluationprofessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsautoevaluationprofessionnelPageRoutingModule {}
