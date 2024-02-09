class ProfilModel {
    // Constructeur prenant des informations générales, activités, sessions moyennes et performances
    constructor(profile) {

        //this fait référence à l'instance de ProfilModel qui est créée lorsque on instancie la classe

        // Initialisation des propriétés de l'objet ProfilModel avec les données du profil passé en paramètre
        this.firstName = profile.firstName; // Prénom de l'utilisateur
        this.lastName = profile.lastName;
        this.id = profile.id;
        this.email = profile.email;
    }
}

// Export de la classe ProfilModel pour pouvoir l'utiliser ailleurs
export default ProfilModel;