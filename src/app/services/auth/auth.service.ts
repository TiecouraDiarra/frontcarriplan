import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API_ELEVE = 'http://localhost:8080/eleve/';
const AUTH_API_ETUDIANT = 'http://localhost:8080/etudiant/';
const AUTH_API_PROFESSIONNEL = 'http://localhost:8080/professionnel/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //Connexion
  connexion(numeroOrEmail: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        numeroOrEmail,
        password,
      },
      httpOptions
    );
  }

  //Modifier profil Utilisateur
  modifier(nomcomplet: string, numero: string, email: string, iduser:number): Observable<any> {
    console.log("L'identifiant de user : " +iduser);
    return this.http.put(
      AUTH_API + 'user/'  + `${iduser}`,
      {
        nomcomplet,
        numero,
        email,
        iduser
      },
      httpOptions
    );
  }

  //Modifier mot de passe Utilisateur
  modifierMotDePasse(ancienmdp: string, nouveaumdp: string, confirmNewmdp: string, numero:string): Observable<any> {
    console.log("Le numero de user : " +numero);
    return this.http.put(
      AUTH_API + 'modifierpassword/'  + `${numero}`,
      {
        ancienmdp,
        nouveaumdp,
        confirmNewmdp,
        numero
      },
      httpOptions
    );
  }

  //REINITIALISER LE MOT DE PASSE AVEC EMAIL
  reinitialisermotdepasse(email:string):Observable<any>{
    return this.http.get(AUTH_API + 'resetpassword/' + `${email}`)
  }


  //Inscription eleve
  inscriptioneleve(nomcomplet: string, numero:string, email: string, password: string, confirmpassword:string): Observable<any> {
    return this.http.post(
      AUTH_API_ELEVE + 'signup',
      {
        nomcomplet,
        numero,
        email,
        password,
        confirmpassword
      },
      httpOptions
    );
  }

  //Inscription etudiant
  inscriptionetudiant(nomcomplet: string, numero:string, email: string, password: string, confirmpassword:string, serie:string): Observable<any> {
    console.log("La série est : " +serie);
    return this.http.post(
      AUTH_API_ETUDIANT + 'signup/' + `${serie}`,
      {
        nomcomplet,
        numero,
        email,
        password,
        confirmpassword,
        serie
      },
      httpOptions
    );
  }

  //Inscription professionnel
  inscriptionprofessionnel(nomcomplet: string, numero:string, email: string, password: string, confirmpassword:string, domaine:string): Observable<any> {
    console.log("Le domaine est : " +domaine);
    return this.http.post(
      AUTH_API_PROFESSIONNEL + 'signup/' + `${domaine}`,
      {
        nomcomplet,
        numero,
        email,
        password,
        confirmpassword,
        domaine
      },
      httpOptions
    );
  }


  //Deconnexion
  logout(): Observable<any> {
    const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
    return this.http.request(req);
  }

  
}