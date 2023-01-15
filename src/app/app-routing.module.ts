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
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'accueileleve',
    loadChildren: () => import('./eleve/accueileleve/accueileleve.module').then( m => m.AccueilelevePageModule)
  },
  {
    path: 'autoeleve',
    loadChildren: () => import('./eleve/autoeleve/autoeleve.module').then( m => m.AutoelevePageModule)
  },
  {
    path: 'pisteeleve',
    loadChildren: () => import('./eleve/pisteeleve/pisteeleve.module').then( m => m.PisteelevePageModule)
  },
  {
    path: 'carriereeleve',
    loadChildren: () => import('./eleve/carriereeleve/carriereeleve.module').then( m => m.CarriereelevePageModule)
  },
  {
    path: 'accueiletudiant',
    loadChildren: () => import('./etudiant/accueiletudiant/accueiletudiant.module').then( m => m.AccueiletudiantPageModule)
  },
  {
    path: 'autoetudiant',
    loadChildren: () => import('./etudiant/autoetudiant/autoetudiant.module').then( m => m.AutoetudiantPageModule)
  },
  {
    path: 'carriereetudiant',
    loadChildren: () => import('./etudiant/carriereetudiant/carriereetudiant.module').then( m => m.CarriereetudiantPageModule)
  },
  {
    path: 'pisteetudiant',
    loadChildren: () => import('./etudiant/pisteetudiant/pisteetudiant.module').then( m => m.PisteetudiantPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'accueilprofessionnel',
    loadChildren: () => import('./professionnel/accueilprofessionnel/accueilprofessionnel.module').then( m => m.AccueilprofessionnelPageModule)
  },
  {
    path: 'autoprofessionnel',
    loadChildren: () => import('./professionnel/autoprofessionnel/autoprofessionnel.module').then( m => m.AutoprofessionnelPageModule)
  },
  {
    path: 'carriereprofessionnel',
    loadChildren: () => import('./professionnel/carriereprofessionnel/carriereprofessionnel.module').then( m => m.CarriereprofessionnelPageModule)
  },
  {
    path: 'pisteprofessionnel',
    loadChildren: () => import('./professionnel/pisteprofessionnel/pisteprofessionnel.module').then( m => m.PisteprofessionnelPageModule)
  },
  {
    path: 'autoevaluationeleve',
    loadChildren: () => import('./eleve/autoevaluationeleve/autoevaluationeleve.module').then( m => m.AutoevaluationelevePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
