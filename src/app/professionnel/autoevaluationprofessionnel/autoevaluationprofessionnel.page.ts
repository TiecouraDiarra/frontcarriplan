import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { DomaineprofService } from 'src/app/services/domaineprof/domaineprof.service';
import { QuestionService } from 'src/app/services/question/question.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autoevaluationprofessionnel',
  templateUrl: './autoevaluationprofessionnel.page.html',
  styleUrls: ['./autoevaluationprofessionnel.page.scss'],
})
export class AutoevaluationprofessionnelPage implements OnInit {

  questions: any[];
  questionsfiliere: any[];
  answers: any = {};
  idUser: any;
  message: string | undefined;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  domaines: any;

  resetForm() {
    questions: '';
    answers: '';
  }


  constructor(
    private domaineService: DomaineprofService,
    public navCtrl: NavController,
    private authService: AuthService,
    private storageService: StorageService,
    public service: QuestionService,
    public ser: AutoevaluationService,
    private route: Router,
    private loadingCtrl: LoadingController,
  ) {

  }


  ngOnInit() {

    this.idUser = this.storageService.getUser()
    console.log(this.idUser.id)
    //AFFICHER LES QUESTIONS DU PROFESSIONNEL(DOMAINE)
    this.ser.AfficherLaListeQuestionProf().subscribe(data => {
      this.questions = data;
      console.log(this.questions)
    })

    //AFFICHER LES QUESTIONS DU PROFESSIONNEL(FILIERE)
    this.ser.AfficherLaListeQuestionProfFiliere().subscribe(data => {
      this.questionsfiliere = data;
      console.log(this.questionsfiliere)
    })

    //METHODE PERMETTANT D'AFFICHER LES DOMAINES DES PROFESSIONNELS
    this.domaineService.getalldomaineprof().subscribe(data => {
      console.log(data)
      this.domaines = data;
    })
  }

  //ENVOYER LE RESULTAT DE L'AUTOEVALUATION
  submitAnswers() {
    this.ser.faireAuto(this.answers, this.idUser.id).subscribe({
      next: data => {
        this.answers = data;
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // this.ResultatAuto();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    }
    )
  }

  //AFFICHER RESULTAT AUTOEVALUATION
  // ResultatAuto() {
  //   this.service.AfficherParcoursLycce(this.idUser.id).subscribe(data => {
  //     this.parcoursecoleprofessionnel = data;
  //     console.log(this.parcoursecoleprofessionnel)
  //   })
  //   this.service.AfficherParcoursEcoleProfessionnelle(this.idUser.id).subscribe(data => {
  //     console.log(data)
  //   })
  // }

    //POPUP PERMETTANT DE VALIDER AUTOEVALUATION
    popUpFaireAuto() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger',
        },
        heightAuto: false
      })
      swalWithBootstrapButtons.fire({
        // title: 'Etes-vous sûre de vous déconnecter?',
        text: "Vous allez effectuer votre autoévaluation ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer',
        cancelButtonText: 'Annuler',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          // this.showLoading();
          this.submitAnswers();
          this.popUp();
        //   swalWithBootstrapButtons.fire(
        //     'Auto-évaluation effectuée avec succès !',
        //     'Tes pistes sont prêtes',
        //     'success',);
          
        }
      })
  
    }

      //POPUP PERMETTANT DE NAVIGUER VERS LA PAGE APRES AUTO
  popUp() {
    Swal.fire({
      position:'center',
      text: 'Auto-évaluation effectuée avec succès ! \n Tes pistes sont prêtes',
      icon:'success',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        // this.ResultatAuto();
        this.showLoading();
        
        this.route.navigateByUrl('/tab3/autoprofessionnel', {skipLocationChange: true}).then(() => {
          this.route.navigate(["/tab3/autoprofessionnel"])
        })
        // event.target.complete();
      }
    })

  }

  //Loading fonction
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Patientez...',
      duration: 3000,
      spinner: 'circles',
    });
    loading.present().then(() => {
      this.route.navigate(["/tab3/autoprofessionnel"])
    //   this.route.navigateByUrl('/tabs/autoeleve', { skipLocationChange: true }).then(() => {
    //     this.route.navigate(["/tabs/autoeleve"])
    //   })
    });
  }




  //METHODE PERMETTANT DE SE DECONNECTER
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
