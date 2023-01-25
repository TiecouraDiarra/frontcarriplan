import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomaineprofService {
  API_URL = 'http://localhost:8080/domaineprof';


  constructor(private http: HttpClient) { }

  //AFFICHER LES DOMAINES DES PROFESSIONNELS
  getalldomaineprof():Observable<any>{
    return this.http.get(`${this.API_URL}/afficher`);
  }
}
