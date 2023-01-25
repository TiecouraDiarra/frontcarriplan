import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiletudiantPage } from './profiletudiant.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiletudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiletudiantPageRoutingModule {}
