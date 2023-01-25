import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
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
  answers: any = {};
  idUser: any;
  message: string | undefined;

  resetForm(){
    questions:'';
    answers:'';
  }


  constructor(public navCtrl: NavController,private http: HttpClient,private authService: AuthService, private storageService: StorageService, public service : QuestionService, public ser : AutoevaluationService, private route: Router) { 
    
  }


  ngOnInit() {

    this.idUser = this.storageService.getUser()
    console.log(this.idUser.id)
     //AFFICHER LES QUESTIONS DU PROFESSIONNEL
     this.ser.AfficherLaListeQuestionProf().subscribe(data => {
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
          this.route.navigate(['/tab3/autoprofessionnel']);
          swalWithBootstrapButtons.fire(
            'Auto-évaluation effectuée avec succès !',
            'Tes pistes sont prêtes',
            'success',)
          // console.log(this.answers);
          this.ser.faireAuto(this.answers, this.idUser.id).subscribe(
            data => {
              console.log(data);
              this.route.navigate(['/tab3/autoprofessionnel']);
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
