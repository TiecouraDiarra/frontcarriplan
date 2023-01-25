import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DomaineprofService } from 'src/app/services/domaineprof/domaineprof.service';

@Component({
  selector: 'app-inscript-professionnel',
  templateUrl: './inscript-professionnel.page.html',
  styleUrls: ['./inscript-professionnel.page.scss'],
})
export class InscriptProfessionnelPage implements OnInit {
  type = true;
  domaines : any;

  form: any = {
    nomcomplet:null,
    numero:null,
    email:null,
    password:null,
    confirmpassword:null,
    domaine:null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService, private route: Router, private domaineService : DomaineprofService) { }

  ngOnInit() {
    //METHODE PERMETTANT D'AFFICHER LES SERIES DES BACHELIERS
    this.domaineService.getalldomaineprof().subscribe(data =>{
      console.log(data)
      this.domaines = data;
    })
  }


  changeType() {
    this.type = !this.type;
  }
  back(): void {
    window.history.back()
  }

  onSubmit(): void {
    const {  nomcomplet,
      numero,
      email,
      password,
      confirmpassword,domaine} = this.form;

    this.authService.inscriptionprofessionnel(nomcomplet,numero, email, password, confirmpassword, domaine.nomdomaine).subscribe({
      next: data => {
        if (this.isSuccessful=true) {
          this.route.navigateByUrl('/connexion');
        }
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
