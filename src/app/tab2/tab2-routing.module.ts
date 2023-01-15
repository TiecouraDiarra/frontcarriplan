import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: 'tab2',
    component: Tab2Page,
    children: [
      {
        path: 'accueiletudiant',
        loadChildren: () => import('../etudiant/accueiletudiant/accueiletudiant.module').then( m => m.AccueiletudiantPageModule)
      },
      {
        path: 'autoetudiant',
        loadChildren: () => import('../etudiant/autoetudiant/autoetudiant.module').then( m => m.AutoetudiantPageModule)
      },
      {
        path: 'carriereetudiant',
        loadChildren: () => import('../etudiant/carriereetudiant/carriereetudiant.module').then( m => m.CarriereetudiantPageModule)
      },
      {
        path: 'pisteetudiant',
        loadChildren: () => import('../etudiant/pisteetudiant/pisteetudiant.module').then( m => m.PisteetudiantPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
