import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  API1_URL = 'http://localhost:8080/question';

  constructor(private http: HttpClient) { }

  //AFFICHER LA LISTE DES QUESTIONS
  AfficherLaListeQuestion():Observable<any>{
    return this.http.get(`${this.API1_URL}/afficher`);
  }

  //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSECO
  AfficherLaListeQuestionTseco(): Observable<any> {
    return this.http.get(`${this.API1_URL}/afficherQuestionTseco`);
  }

  //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSE
  AfficherLaListeQuestionTse(): Observable<any> {
    return this.http.get(`${this.API1_URL}/afficherQuestionTse`);
  }

   //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSEXP
   AfficherLaListeQuestionTsexp(): Observable<any> {
    return this.http.get(`${this.API1_URL}/afficherQuestionTsexp`);
  }

   //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TLL
   AfficherLaListeQuestionTll(): Observable<any> {
    return this.http.get(`${this.API1_URL}/afficherQuestionTll`);
  }

  //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TAL
  AfficherLaListeQuestionTal(): Observable<any> {
    return this.http.get(`${this.API1_URL}/afficherQuestionTal`);
  }

  //AFFICHER LA LISTE DES QUESTIONS POUR LES ETUDIANTS QUI ONT FAIT LA TSS
  AfficherLaListeQuestionTss(): Observable<any> {
    return this.http.get(`${this.API1_URL}/afficherQuestionTss`);
  }
}
