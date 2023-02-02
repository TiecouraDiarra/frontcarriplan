import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsautoevaluationetudiantPage } from './detailsautoevaluationetudiant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsautoevaluationetudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsautoevaluationetudiantPageRoutingModule {}
