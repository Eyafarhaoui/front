import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from '../models/Agent';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8081/api/login-agent'; // URL de l'API backend

  constructor(private http: HttpClient) { }

  login(agent: Agent): Observable<any> {
    return this.http.post(this.apiUrl, agent);
  }
}
