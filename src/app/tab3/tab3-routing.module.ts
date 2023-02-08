import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: 'tab3',
    component: Tab3Page,
    children:[
      {
        path: 'accueilprofessionnel',
        loadChildren: () => import('../professionnel/accueilprofessionnel/accueilprofessionnel.module').then( m => m.AccueilprofessionnelPageModule)
      },
      {
        path: 'autoprofessionnel',
        loadChildren: () => import('../professionnel/autoprofessionnel/autoprofessionnel.module').then( m => m.AutoprofessionnelPageModule)
      },
      {
        path: 'carriereprofessionnel',
        loadChildren: () => import('../professionnel/carriereprofessionnel/carriereprofessionnel.module').then( m => m.CarriereprofessionnelPageModule)
      },
      {
        path: 'pisteprofessionnel',
        loadChildren: () => import('../professionnel/pisteprofessionnel/pisteprofessionnel.module').then( m => m.PisteprofessionnelPageModule)
      },
      {
        path: 'detailsparcours/:id',
        loadChildren: () => import('../professionnel/detailsparcours/detailsparcours.module').then( m => m.DetailsparcoursPageModule)
      },
      {
        path: 'detailsmetiers/:id',
        loadChildren: () => import('../professionnel/detailsmetiers/detailsmetiers.module').then( m => m.DetailsmetiersPageModule)
      },
      {
        path: 'profilprofessionnel',
        loadChildren: () => import('../professionnel/profilprofessionnel/profilprofessionnel.module').then( m => m.ProfilprofessionnelPageModule)
      },
      {
        path: 'autoevaluationprofessionnel',
        loadChildren: () => import('../professionnel/autoevaluationprofessionnel/autoevaluationprofessionnel.module').then( m => m.AutoevaluationprofessionnelPageModule)
      },
      {
        path: 'modifprofilprofessionnel',
        loadChildren: () => import('../professionnel/modifprofilprofessionnel/modifprofilprofessionnel.module').then( m => m.ModifprofilprofessionnelPageModule)
      },
      {
        path: 'detailsautoevaluationprofessionnel/:id',
        loadChildren: () => import('../professionnel/detailsautoevaluationprofessionnel/detailsautoevaluationprofessionnel.module').then( m => m.DetailsautoevaluationprofessionnelPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PageRoutingModule {}
