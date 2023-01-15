import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueileleve',
        loadChildren: () => import('../eleve/accueileleve/accueileleve.module').then( m => m.AccueilelevePageModule)
      },
      {
        path: 'autoeleve',
        loadChildren: () => import('../eleve/autoeleve/autoeleve.module').then( m => m.AutoelevePageModule)
      },
      {
        path: 'pisteeleve',
        loadChildren: () => import('../eleve/pisteeleve/pisteeleve.module').then( m => m.PisteelevePageModule)
      },
      {
        path: 'carriereeleve',
        loadChildren: () => import('../eleve/carriereeleve/carriereeleve.module').then( m => m.CarriereelevePageModule)
      },
      {
        path: 'autoevaluationeleve',
        loadChildren: () => import('../eleve/autoevaluationeleve/autoevaluationeleve.module').then( m => m.AutoevaluationelevePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
