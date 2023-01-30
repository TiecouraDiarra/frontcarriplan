import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscript-eleve',
  templateUrl: './inscript-eleve.page.html',
  styleUrls: ['./inscript-eleve.page.scss'],
})
export class InscriptElevePage implements OnInit {
  
  type = true;
  form: any = {
    nomcomplet:null,
    numero:null,
    email:null,
    password:null,
    confirmpassword:null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
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
      confirmpassword} = this.form;

    this.authService.inscriptioneleve(nomcomplet,numero, email, password, confirmpassword).subscribe({
      next: data => {
        // if (this.isSuccessful=true) {
        //   this.route.navigateByUrl('/connexion');
        // }
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.popUp();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  popUp() {
    Swal.fire({
      position:'center',
      text: 'Compte creé avec success!!',
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
        this.route.navigateByUrl('/connexion', {skipLocationChange: true}).then(() => {
          this.route.navigate(["/connexion"])
        })
      }
    })

  }
}
