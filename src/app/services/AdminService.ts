import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from '../models/Agent';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8081/admin/ajouter-agent'; // URL de l'API backend

  constructor(private http: HttpClient) { }

  ajouterAgent(agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(this.apiUrl, agent);
  }


}

