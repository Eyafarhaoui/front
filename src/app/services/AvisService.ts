import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private baseUrl = 'http://localhost:8081/api/avis';

  constructor(private http: HttpClient) {}

  // Récupérer les avis pour un propriétaire donné
  getAvisByProprietaire(idProprietaire: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/proprietaire/${idProprietaire}`);
  }

  getAvisByClient(idClient: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/client/${idClient}`);
  }
  
}
