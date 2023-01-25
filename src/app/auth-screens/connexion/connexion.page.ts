import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  // forme!: FormGroup;
  type = true;
  // numeromdp: string;
  // psw: string;
  // submitted = false;

  form: any = {
    numeroOrEmail: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  

  constructor(private authService: AuthService, private storageService: StorageService, private route: Router) { }

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  

  // submitForm() {
  //   console.log('Nom :', this.numeromdp);
  //   console.log('Adresse e-mail :', this.psw);
  // }

  changeType() {
    this.type = !this.type;
  }

  onSubmit(): void {
    const {  numeroOrEmail,
      password,} = this.form;

    this.authService.connexion(numeroOrEmail, password).subscribe({
      next: data => {
        
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        // this.reloadPage();
        console.log(this.roles[0])
        if(this.roles[0]=="ROLE_ELEVE"){
          this.route.navigate(['/tabs/accueileleve'])
        }else if(this.roles[0]=="ROLE_ETUDIANT"){
          this.route.navigate(['/tab2/accueiletudiant'])
        }else if(this.roles[0]=="ROLE_PROFESSIONNEL"){
          this.route.navigate(['/tab3/accueilprofessionnel'])
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

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
