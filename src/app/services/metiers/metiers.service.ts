import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetiersService {

  API_URL = 'http://localhost:8080/metiers';

  constructor(private http: HttpClient) { }

  //RECUPERER L'ID D'UN METIER
  RetrouverParIdMetiers(idMetier:number):Observable<any>{
    return this.http.get(`${this.API_URL}/RecupererIdMetier/${idMetier}`);
  }

  //AFFICHER LA LISTE DES METIERS
  AfficherLaListeMetiers():Observable<any>{
    return this.http.get(`${this.API_URL}/afficher`);
  }
}
