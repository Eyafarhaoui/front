export class ReponseSurAvisProp {
    id?: number;             // Identifiant unique du commentaire
    client_id!: number;
    commentaire!: string;        // Contenu du commentaire
    DATE_COMMENTAIRE !: Date;             // Date du commentaire
    note!: number;           // Note donnée (échelle de 1 à 5)

    client: { id: number } = { id: 0 }; // Objet client
}