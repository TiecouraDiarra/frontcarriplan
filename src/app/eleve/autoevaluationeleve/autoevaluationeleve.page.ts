import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActionSheetController, IonContent, IonSlides, NavController } from '@ionic/angular';
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

form:FormGroup


  questions: any[];
  answers: any = {};
  idUser: any;

  message: string | undefined;
  resetForm(){
    questions:'';
    answers:'';
  }

  constructor(public serviceQ: QuestionService, private service: AutoevaluationService, private route: Router, private storage: StorageService) {
  }

  back(): void {
    window.history.back()
  }

  ngOnInit() {
    this.idUser = this.storage.getUser()
    console.log(this.idUser.id)
    //AFFICHER LES QUESTIONS POUR ELEVES
    this.service.AfficherLaListeQuestionEleve().subscribe(data => {
      console.log(this.questions)
      this.questions = data;
    })
  }

  submitAnswers() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    if (this.answers == "") {
      swalWithBootstrapButtons.fire(
        this.message = " Tous les champs sont obligatoires !",
      )
      this.resetForm();
    }else{
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
          this.route.navigate(['/tabs/autoeleve']);
          swalWithBootstrapButtons.fire(
            'Auto-évaluation effectuée avec succès !',
            'Tes pistes sont prêtes',
            'success',)
          // console.log(this.answers);
          console.log(this.answers);
          this.service.faireAuto(this.answers, this.idUser.id).subscribe(
            data => {
              //this.route.navigate(['/tabs/loadingpage']);
              this.answers = data;
              console.log(data);
              swalWithBootstrapButtons.fire(
                'Auto-évaluation effectuée avec succès !',
                'Tes pistes sont prêtes',
                'success',)
                this.resetForm();
  
            }
          )
        }else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Auto-évaluation annulée'
          )

        }
      })
    }
    
  }


}
