import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { ReclamationClient } from '../models/ReclamationClient';
import { ReclamationService } from '../services/ReclamationService';

@Component({
  selector: 'app-assistan-client',
  templateUrl: './assistan-client.component.html',
  styleUrls: ['./assistan-client.component.css']
})
export class AssistanClientComponent {
   rec: ReclamationClient = new ReclamationClient();
    message: string = '';
    warningMessage: string = '';

    constructor(private recService: ReclamationService, private router: Router) {} // Inject Router

    

    onSubmit(): void {
        if (!this.rec.contenu || this.rec.contenu.trim() === '') {
            this.warningMessage = 'Veuillez saisir une réclamation avant de publier.';
            return;
        }
    
        this.warningMessage = ''; 
        const userId = localStorage.getItem('userId');
        if (!userId) {
            this.message = "Utilisateur non connecté.";
            return;
        }
    
        this.rec.idClient = Number(userId); 
        console.log('ID du client:', this.rec.idClient); 
        console.log('Données de la réclamation avant envoi:', this.rec);
        this.recService.createReclamationClient(this.rec).subscribe({
            next: (response) => {
                console.log('Réponse de l\'API:', response); 
                this.message = 'Publication effectuée avec succès !';
                alert(this.message);
                this.router.navigate(['/dashboardClient']);
            },
            error: (err) => {
                console.error('Erreur lors de la publication:', err);
                this.message = 'Une erreur est survenue lors de la publication.';
                alert(this.message);
            }
        });
    }

}
