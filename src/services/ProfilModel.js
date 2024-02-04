class ProfilModel {
    // Constructeur prenant des informations générales, activités, sessions moyennes et performances
    constructor(profile) {
        this.firstName = profile.firstName;
        this.lastName = profile.lastName;
        this.id = profile.id;
        this.email = profile.email;
    }
}

// Export de la classe ProfilModel pour pouvoir l'utiliser ailleurs
export default ProfilModel;