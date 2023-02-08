import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ParcoursService {

  API_URL = 'http://localhost:8080/parcours';

  constructor(private http: HttpClient) { }

  //AFFICHER LES PARCOURS DU LYCEE
  getParcoursEleve(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficherParcoursLycee`);
    // return this.http.get(API_URL + 'afficherParcoursLycee');
  }

  //AFFICHER LES PARCOURS DES ECOLES PROFESSIONNELLES
  getParcoursEcoleProfessionnelle(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficherParcoursProfessionnel`);
    // return this.http.get(API_URL + 'afficherParcoursLycee');
  }

  //AFFICHER LES PARCOURS DE L'UNIVERSITE
  getParcoursUniversite(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficherParcoursUniversite`);
    // return this.http.get(API_URL + 'afficherParcoursLycee');
  }

  //AFFICHER LES PARCOURS DE L'UNIVERSITE
  afficherImageUniversite(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficherImageUniversite`);
    // return this.http.get(API_URL + 'afficherParcoursLycee');
  }

  //RECUPERER L'ID D'UN PARCOURS
  RetrouverParIdParcours(idParcours:number):Observable<any>{
    return this.http.get(`${this.API_URL}/RecupererIdParcours/${idParcours}`);
  }

  //RECUPERER LES METIERS EN FONCTION D'UN PARCOURS
  RecupererMetierParParcours(idParcours:number):Observable<any>{
    return this.http.get(`${this.API_URL}/RecupererIdParcoursMe/${idParcours}`);
  }

  //RECUPERER LES MATIERES EN FONCTION D'UN PARCOURS
  RecupererMatiereParParcours(idParcours:number):Observable<any>{
    return this.http.get(`${this.API_URL}/RecupererIdParcoursMatiere/${idParcours}`);
  }

}
