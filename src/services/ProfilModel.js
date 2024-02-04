class ProfilModel {
    // Constructeur prenant des informations générales, activités, sessions moyennes et performances
    constructor(profile) {
        this.firstName = profile.firstName;
        this.lastName = profile.lastName;
    }
}

// Export de la classe ProfilModel pour pouvoir l'utiliser ailleurs
export default ProfilModel;