export class ReponseSurAvisClient {
    id?: number;             // Identifiant unique du commentaire
    proprietaire_id!: number;
    commentaire!: string;        // Contenu du commentaire
    DATE_COMMENTAIRE !: Date;             // Date du commentaire
    note!: number;           // Note donnée (échelle de 1 à 5)

    proprietaire: { id: number } = { id: 0 }; // Objet prop
}