import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwaitComponent } from '../eleve/await/await.component';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path:'await',
        component: AwaitComponent
      },
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
      {
        path: 'valid',
        loadChildren: () => import('../eleve/valid/valid.module').then( m => m.ValidPageModule)
      },
      {
        path: 'detailsparcours/:id',
        loadChildren: () => import('../eleve/detailsparcours/detailsparcours.module').then( m => m.DetailsparcoursPageModule)
      },
      {
        path: 'detailsmetier/:id',
        loadChildren: () => import('../eleve/detailsmetier/detailsmetier.module').then( m => m.DetailsmetierPageModule)
      },
      {
        path: 'profileleve',
        loadChildren: () => import('../eleve/profileleve/profileleve.module').then( m => m.ProfilelevePageModule)
      },
      {
        path: 'loadingpage',
        loadChildren: () => import('../eleve/loadingpage/loadingpage.module').then( m => m.LoadingpagePageModule)
      },
      {
        path: 'modifprofileleve',
        loadChildren: () => import('../eleve/modifprofileleve/modifprofileleve.module').then( m => m.ModifprofilelevePageModule)
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
