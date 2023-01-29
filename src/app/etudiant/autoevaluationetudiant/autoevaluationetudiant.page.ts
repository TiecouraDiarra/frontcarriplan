import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  idUser: any;

  message: string | undefined;
  resetForm() {
    questions: '';
    answers: '';
  }

  constructor(public serviceQ: QuestionService, private service: AutoevaluationService, private route: Router, private storage: StorageService) { }

  ngOnInit() {
    this.idUser = this.storage.getUser()
    console.log(this.idUser)
    //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSECO
    if (this.idUser.serie.nomserie == "TSECO") {
      this.serviceQ.AfficherLaListeQuestionTseco().subscribe(data => {
        this.questions = data;
        console.log(this.questions) 
      })
    }
    //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSE
    else if (this.idUser.serie.nomserie == "TSE") {
      this.serviceQ.AfficherLaListeQuestionTse().subscribe(data => {
        console.log(this.questions)
        this.questions = data;
      })
    }
    //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSEXP
    else if (this.idUser.serie.nomserie == "TSEXP") {
      this.serviceQ.AfficherLaListeQuestionTsexp().subscribe(data => {
        console.log(this.questions)
        this.questions = data;
      })
    }
    //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TLL
    else if (this.idUser.serie.nomserie == "TLL") {
      this.serviceQ.AfficherLaListeQuestionTll().subscribe(data => {
        console.log(this.questions)
        this.questions = data;
      })
    }
    //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TAL
    else if (this.idUser.nomseries == "TAL") {
      this.serviceQ.AfficherLaListeQuestionTal().subscribe(data => {
        console.log(this.questions)
        this.questions = data;
      })
    }
    //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSS
    else if (this.idUser.nomseries == "TSS") {
      this.serviceQ.AfficherLaListeQuestionTss().subscribe(data => {
        console.log(this.questions)
        this.questions = data;
      })
    }


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
    } else {
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
          this.route.navigate(['/tab2/autoetudiant']);
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
        } else if (
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
