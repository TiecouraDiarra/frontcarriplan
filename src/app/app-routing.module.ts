import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./auth-screens/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./auth-screens/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./auth-screens/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'motdepasseoublie',
    loadChildren: () => import('./auth-screens/motdepasseoublie/motdepasseoublie.module').then( m => m.MotdepasseoubliePageModule)
  },
  {
    path: 'inscript',
    loadChildren: () => import('./auth-screens/inscript/inscript.module').then( m => m.InscriptPageModule)
  },
  {
    path: 'accueileleve',
    loadChildren: () => import('./accueils/accueileleve/accueileleve.module').then( m => m.AccueilelevePageModule)
  },
  {
    path: 'inscript-eleve',
    loadChildren: () => import('./auth-screens/inscript-eleve/inscript-eleve.module').then( m => m.InscriptElevePageModule)
  },
  {
    path: 'inscript-etudiant',
    loadChildren: () => import('./auth-screens/inscript-etudiant/inscript-etudiant.module').then( m => m.InscriptEtudiantPageModule)
  },
  {
    path: 'inscript-professionnel',
    loadChildren: () => import('./auth-screens/inscript-professionnel/inscript-professionnel.module').then( m => m.InscriptProfessionnelPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
