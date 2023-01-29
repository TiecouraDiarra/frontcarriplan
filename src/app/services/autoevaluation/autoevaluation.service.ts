import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// const API_URL = 'http://localhost:8080/autoevaluation/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AutoevaluationService {
  API_URL = 'http://localhost:8080/autoevaluation';
  API1_URL = 'http://localhost:8080/question';

  constructor(private http: HttpClient) { }

  //METHODE PERMETTANT DE FAIRE L'AUTOEVALUATION
  faireAuto(data: any,id:any): Observable<any> {
    let reponse = [];
    let size = Object.entries(data).length;
    console.log(size)
    for (let [key, value] of Object.entries(data)) {
      console.log(key + ": " + value);
      reponse.push({
        "question": {
          "id":key
        },
        "reponse": value
      });
    }

    let donne = {
      "reponses": reponse
    }
    console.log(reponse);
    return this.http.post(`${this.API_URL}/ajouter/${id}`, donne)
  }

  //AFFICHER LA LISTE DES AUTOEVALUATIONS D'UN UTILISATEUR
  AfficherLaListeAutoUser(id_user:number): Observable<any> {
    return this.http.get(`${this.API_URL}/AutoUser/${id_user}`);
  }

  //AFFICHER LA LISTE DES QUESTIONS POUR L'ELEVE
  AfficherLaListeQuestionEleve(): Observable<any> {
    return this.http.get(`${this.API1_URL}/afficherQuestionEleve`);
  }

  //AFFICHER LA LISTE DES QUESTIONS POUR LE PROFESSIONNEL
  AfficherLaListeQuestionProf(): Observable<any> {
    return this.http.get(`${this.API1_URL}/afficherQuestionProfe`);
  }



}
