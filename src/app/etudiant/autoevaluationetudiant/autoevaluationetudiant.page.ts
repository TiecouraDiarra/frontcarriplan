import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { QuestionService } from 'src/app/services/question/question.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autoevaluationetudiant',
  templateUrl: './autoevaluationetudiant.page.html',
  styleUrls: ['./autoevaluationetudiant.page.scss'],
})
export class AutoevaluationetudiantPage implements OnInit {

  questions: any[];
  answers: any = {};
  formValid = false;
  
  idUser: any;
  Etudiant: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  parcoursetudiant:any

  message: string | undefined;
  resetForm() {
    questions: '';
    answers: '';
  }

  // form: any = {
  //   numero: null
  // }
  // form: any = {
  //   questions:null,
  //   answers:null,
  // };

  constructor(
    public serviceQ: QuestionService,
    private service: AutoevaluationService,
    private route: Router,
    private storage: StorageService,
    private authService: AuthService,
    private loadingCtrl: LoadingController
  ) { }

  checkFormValid() {
    this.formValid = true;
    this.questions.forEach(question => {
    if (!this.answers[question.id]) {
    this.formValid = false;
    return;
    }
    });
    }

  ngOnInit() {
    this.idUser = this.storage.getUser()
    console.log(this.idUser);
    // const { numero } = this.form;
    // this.questions.forEach(question => {
    //   if (!this.answers[question.id]) {
    //   this.formValid = false;
    //   return;
    //   }
    //   this.formValid = true;
    //   });

      
    this.authService.RecupererIdEtudiant(this.idUser.id).subscribe(data => {
      this.Etudiant = data,
        console.log(this.Etudiant),
        console.log(this.Etudiant.serieLycee.nomserie);
      //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSECO
      if (this.Etudiant.serieLycee.nomserie == "TSECO") {
        this.serviceQ.AfficherLaListeQuestionTseco().subscribe(data => {
          this.questions = data;
          console.log(this.questions)
        })
      }
      //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSE
      else if (this.Etudiant.serieLycee.nomserie == "TSE") {
        this.serviceQ.AfficherLaListeQuestionTse().subscribe(data => {
          console.log(this.questions)
          this.questions = data;
        })
      }
      //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSEXP
      else if (this.Etudiant.serieLycee.nomserie == "TSEXP") {
        this.serviceQ.AfficherLaListeQuestionTsexp().subscribe(data => {
          console.log(this.questions)
          this.questions = data;
        })
      }
      //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TLL
      else if (this.Etudiant.serieLycee.nomserie == "TLL") {
        this.serviceQ.AfficherLaListeQuestionTll().subscribe(data => {
          console.log(this.questions)
          this.questions = data;
        })
      }
      //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TAL
      else if (this.Etudiant.serieLycee.nomserie == "TAL") {
        this.serviceQ.AfficherLaListeQuestionTal().subscribe(data => {
          console.log(this.questions)
          this.questions = data;
        })
      }
      //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSS
      else if (this.Etudiant.serieLycee.nomserie == "TSS") {
        this.serviceQ.AfficherLaListeQuestionTss().subscribe(data => {
          console.log(this.questions)
          this.questions = data;
        })
      }

    })

    console.log(this.Etudiant)





  }

  //ENVOYER LE RESULTAT DE L'AUTOEVALUATION
  submitAnswers() {
    this.service.faireAuto(this.answers, this.idUser.id).subscribe({
      next:data => {
        this.answers = data;
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    } 
    )

  }

  //AFFICHER RESULTAT AUTOEVALUATION
  ResultatAuto() {
    this.service.ResultatAutoEtudiant(this.idUser.id).subscribe(data => {
      this.parcoursetudiant = data;
      console.log(this.parcoursetudiant)
    })
    // this.service.AfficherParcoursEcoleProfessionnelle(this.idUser.id).subscribe(data => {
    //   console.log(data)
    // })
  }

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

  // ionViewWillEnter() {
  //   this.route.navigateByUrl('/tab2/autoetudiant', { skipLocationChange: true }).then(() => {
  //     this.route.navigate(["/tab2/autoetudiant"])
  //   });
  // }

  //POPUP PERMETTANT DE NAVIGUER VERS LA PAGE APRES AUTO
  popUp() {
    Swal.fire({
      position: 'center',
      text: 'Auto-évaluation effectuée avec succès ! \n Tes pistes sont prêtes',
      icon: 'success',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.ResultatAuto();
        this.showLoading();
        // this.ionViewWillEnter();
        this.route.navigateByUrl('/tab2/autoetudiant', { skipLocationChange: true }).then(() => {
          this.route.navigate(["/tab2/autoetudiant"])
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
    loading.present();
  }

}
