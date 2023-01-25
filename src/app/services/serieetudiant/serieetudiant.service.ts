import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieetudiantService {
  API_URL = 'http://localhost:8080/serieetudiant';


  constructor(private http: HttpClient) { }

  //AFFICHER LES SERIES DES ETUDIANTS
  getallserieetudiant():Observable<any>{
    return this.http.get(`${this.API_URL}/afficher`);
  }
}
