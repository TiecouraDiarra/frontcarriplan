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
  //Inscription professionnel
  // autoevaluationeleve(
  //   redaction: string,
  //   histgeo: string,
  //   dicquest: string,
  //   mathematique: string,
  //   sciennat: string,
  //   physchimie: string,
  //   anglais: string,
  //   ecm: string): Observable<any> {
  //   return this.http.post(
  //     API_URL + 'ajouter',
  //     {
  //       redaction,
  //       histgeo,
  //       dicquest,
  //       mathematique,
  //       sciennat,
  //       physchimie,
  //       anglais,
  //       ecm
  //     },
  //     httpOptions
  //   );
  // }

  //FAIRE AUTO EVALUATION
  // FaireAutoevaluation():Observable<any>{
  //   let data=new FormData();
  //   return this.http.post<void>(`${this.API_URL}/ajouter`, data);
  // }

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
    //for (let index = 0; index < data.length; index++) {
      // reponse.push({
      //   "question": {
      //     "id":index + 1
      //   },
      //   "reponse": data
      // });

    //}
    let donne = {
      "reponses": reponse
    }
    console.log(reponse);
    return this.http.post(`${this.API_URL}/ajouter/${id}`, donne)
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
