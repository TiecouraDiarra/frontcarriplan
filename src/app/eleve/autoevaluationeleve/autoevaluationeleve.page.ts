import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActionSheetController, IonContent, IonSlides, LoadingController, NavController } from '@ionic/angular';
import { data } from 'jquery';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { QuestionService } from 'src/app/services/question/question.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autoevaluationeleve',
  templateUrl: './autoevaluationeleve.page.html',
  styleUrls: ['./autoevaluationeleve.page.scss'],
})
export class AutoevaluationelevePage implements OnInit {



  // constructor(private authService: AuthService, private route: Router) { }

  form: FormGroup

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  parcoursecoleprofessionnel:any


  questions: any[];
  answers: any = {};
  idUser: any;

  message: string | undefined;
  resetForm() {
    questions: '';
    answers: '';
  }

  constructor(
    private loadingCtrl : LoadingController,
    public serviceQ: QuestionService, 
    private service: AutoevaluationService, 
    private route: Router, 
    private storage: StorageService,
    
    ) {
  }

  back(): void {
    window.history.back()
  }

  ngOnInit() {
    this.idUser = this.storage.getUser()
    console.log(this.idUser.id)
    //AFFICHER LES QUESTIONS POUR ELEVES
    this.service.AfficherLaListeQuestionEleve().subscribe(data => {

      this.questions = data;
      console.log(this.questions)
    })
  }

  //FAIRE UNE AUTOEVALUATION
  submitAnswers() {
    this.service.faireAuto(this.answers, this.idUser.id).subscribe({
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


  //AFFICHER PARCOURS LYCEE APRES AUTOEVALUATION EFFECTUEE
  ResultatAuto(){
    this.service.AfficherParcoursLycce(this.idUser.id).subscribe(data=>{
      this.parcoursecoleprofessionnel = data;
      console.log(this.parcoursecoleprofessionnel)
    })
    this.service.AfficherParcoursEcoleProfessionnelle(this.idUser.id).subscribe(data=>{
      console.log(data)
    })
  }
  


  //POPUP PERMETTANT DE FAIRE AUTOEVALUATION
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
      // reverseButtons: true
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
        this.ResultatAuto();
        this.showLoading();
        
        this.route.navigateByUrl('/tabs/autoeleve', {skipLocationChange: true}).then(() => {
          this.route.navigate(["/tabs/autoeleve"])
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
      this.route.navigate(["/tabs/autoeleve"])
    //   this.route.navigateByUrl('/tabs/autoeleve', { skipLocationChange: true }).then(() => {
    //     this.route.navigate(["/tabs/autoeleve"])
    //   })
    });
  }


}
