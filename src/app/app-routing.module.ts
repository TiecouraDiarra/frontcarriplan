import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PermissionService } from './services/permission/permission.service';

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
    loadChildren: () => import('./auth-screens/intro/intro.module').then( m => m.IntroPageModule),
    
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
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
    //canActivate: [PermissionService]
  },
  {
    path: 'accueileleve',
    loadChildren: () => import('./eleve/accueileleve/accueileleve.module').then( m => m.AccueilelevePageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'autoeleve',
    loadChildren: () => import('./eleve/autoeleve/autoeleve.module').then( m => m.AutoelevePageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'pisteeleve',
    loadChildren: () => import('./eleve/pisteeleve/pisteeleve.module').then( m => m.PisteelevePageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'carriereeleve',
    loadChildren: () => import('./eleve/carriereeleve/carriereeleve.module').then( m => m.CarriereelevePageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'accueiletudiant',
    loadChildren: () => import('./etudiant/accueiletudiant/accueiletudiant.module').then( m => m.AccueiletudiantPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'autoetudiant',
    loadChildren: () => import('./etudiant/autoetudiant/autoetudiant.module').then( m => m.AutoetudiantPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'carriereetudiant',
    loadChildren: () => import('./etudiant/carriereetudiant/carriereetudiant.module').then( m => m.CarriereetudiantPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'pisteetudiant',
    loadChildren: () => import('./etudiant/pisteetudiant/pisteetudiant.module').then( m => m.PisteetudiantPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: '',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule),
    // canActivate: [PermissionService]
  },
  {
    path: '',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'accueilprofessionnel',
    loadChildren: () => import('./professionnel/accueilprofessionnel/accueilprofessionnel.module').then( m => m.AccueilprofessionnelPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'autoprofessionnel',
    loadChildren: () => import('./professionnel/autoprofessionnel/autoprofessionnel.module').then( m => m.AutoprofessionnelPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'carriereprofessionnel',
    loadChildren: () => import('./professionnel/carriereprofessionnel/carriereprofessionnel.module').then( m => m.CarriereprofessionnelPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'pisteprofessionnel',
    loadChildren: () => import('./professionnel/pisteprofessionnel/pisteprofessionnel.module').then( m => m.PisteprofessionnelPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'autoevaluationeleve',
    loadChildren: () => import('./eleve/autoevaluationeleve/autoevaluationeleve.module').then( m => m.AutoevaluationelevePageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'valid',
    loadChildren: () => import('./eleve/valid/valid.module').then( m => m.ValidPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'detailsparcours',
    loadChildren: () => import('./eleve/detailsparcours/detailsparcours.module').then( m => m.DetailsparcoursPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'detailsmetier',
    loadChildren: () => import('./eleve/detailsmetier/detailsmetier.module').then( m => m.DetailsmetierPageModule),
    // canActivate: [PermissionService]
  },
  {
    path: 'profileleve',
    loadChildren: () => import('./eleve/profileleve/profileleve.module').then( m => m.ProfilelevePageModule)
  },
  {
    path: 'detailsparcours',
    loadChildren: () => import('./etudiant/detailsparcours/detailsparcours.module').then( m => m.DetailsparcoursPageModule)
  },
  {
    path: 'detailsmetiers',
    loadChildren: () => import('./etudiant/detailsmetiers/detailsmetiers.module').then( m => m.DetailsmetiersPageModule)
  },
  {
    path: 'profiletudiant',
    loadChildren: () => import('./etudiant/profiletudiant/profiletudiant.module').then( m => m.ProfiletudiantPageModule)
  },
  {
    path: 'detailsparcours',
    loadChildren: () => import('./professionnel/detailsparcours/detailsparcours.module').then( m => m.DetailsparcoursPageModule)
  },
  {
    path: 'detailsmetiers',
    loadChildren: () => import('./professionnel/detailsmetiers/detailsmetiers.module').then( m => m.DetailsmetiersPageModule)
  },
  {
    path: 'profilprofessionnel',
    loadChildren: () => import('./professionnel/profilprofessionnel/profilprofessionnel.module').then( m => m.ProfilprofessionnelPageModule)
  },
  {
    path: 'autoevaluationprofessionnel',
    loadChildren: () => import('./professionnel/autoevaluationprofessionnel/autoevaluationprofessionnel.module').then( m => m.AutoevaluationprofessionnelPageModule)
  },
  {
    path: 'loadingpage',
    loadChildren: () => import('./eleve/loadingpage/loadingpage.module').then( m => m.LoadingpagePageModule)
  },
  {
    path: 'autoevaluationetudiant',
    loadChildren: () => import('./etudiant/autoevaluationetudiant/autoevaluationetudiant.module').then( m => m.AutoevaluationetudiantPageModule)
  },
  {
    path: 'modifprofiletudiant',
    loadChildren: () => import('./etudiant/modifprofiletudiant/modifprofiletudiant.module').then( m => m.ModifprofiletudiantPageModule)
  },
  {
    path: 'modifprofileleve',
    loadChildren: () => import('./eleve/modifprofileleve/modifprofileleve.module').then( m => m.ModifprofilelevePageModule)
  },
  {
    path: 'modifprofilprofessionnel',
    loadChildren: () => import('./professionnel/modifprofilprofessionnel/modifprofilprofessionnel.module').then( m => m.ModifprofilprofessionnelPageModule)
  },
  {
    path: 'detailsautoevaluationeleve',
    loadChildren: () => import('./eleve/detailsautoevaluationeleve/detailsautoevaluationeleve.module').then( m => m.DetailsautoevaluationelevePageModule)
  },  {
    path: 'detailsautoevaluationetudiant',
    loadChildren: () => import('./etudiant/detailsautoevaluationetudiant/detailsautoevaluationetudiant.module').then( m => m.DetailsautoevaluationetudiantPageModule)
  },
  {
    path: 'detailsautoevaluationprofessionnel',
    loadChildren: () => import('./professionnel/detailsautoevaluationprofessionnel/detailsautoevaluationprofessionnel.module').then( m => m.DetailsautoevaluationprofessionnelPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
