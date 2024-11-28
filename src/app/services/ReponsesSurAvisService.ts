
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ReponseSurAvisProp} from'../models/ReponseSurAvisProp';
import { ReponseSurAvisClient } from '../models/ReponseSurAvisClient';
@Injectable({
    providedIn: 'root' // Cela permet à Angular d'injecter le service à travers toute l'application
})
export class ReponsesSurAvisService {
    private apiUrl = 'http://localhost:8081/api/reponseavis'; // URL du backend
  constructor(private http: HttpClient) {}

  // Méthode pour envoyer le commentaire
  submitComment(r:ReponseSurAvisProp): Observable<ReponseSurAvisProp> {
    return this.http.post<ReponseSurAvisProp>(`${this.apiUrl}/submit-comment`, r);
  }
 
  
  submitCommentProp(r:ReponseSurAvisClient): Observable<ReponseSurAvisClient> {
    return this.http.post<ReponseSurAvisClient>(`${this.apiUrl}/submit-comment-prop`, r);

  }
  
}
