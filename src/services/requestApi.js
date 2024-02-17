
   // Assuming you have an API endpoint to fetch user profile based on the token

import ProfilModel from "./ProfilModel";
// Import d'axios pour effectuer des requêtes HTTP
import axios from 'axios';

// Définition d'un objet API contenant des méthodes pour effectuer des opérations d'authentification et de profil utilisateur
const API = {
    // Méthode pour l'authentification de l'utilisateur
    login: async (user, password) => {
        let response;
        try {
            // Assuming you have an API endpoint to fetch user profile based on the token
            // Envoi d'une requête POST pour l'authentification de l'utilisateur avec son email et son mot de passe
            response = await axios.post('http://localhost:3001/api/v1/user/login', {
                "email": user,
                "password": password
            });

            // Retourne les données renvoyées par le serveur en cas de succès
            return response.data.body;
        } catch (error) {
            // En cas d'erreur, retourne le message d'erreur renvoyé par le serveur
            console.log(error.response);
            return error.response.data.message;
        }
    },

    // Méthode pour récupérer le profil de l'utilisateur
    getUserProfile: async (token) => {
        try {
            // Envoi d'une requête POST pour récupérer le profil de l'utilisateur en utilisant le token d'authentification
            const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // Affichage des données renvoyées par le serveur dans la console
            console.log(response.data);
            // Retourne une instance de ProfilModel contenant les données renvoyées par le serveur
            return new ProfilModel(response.data.body); 
        } catch (error) {
            // En cas d'erreur, retourne null
            return null;
        }
    },

    // Méthode pour récupérer le profil de l'utilisateur
    setUserNewNames: async (token, first, last) => {
        try {
            // Envoi d'une requête POST pour récupérer le profil de l'utilisateur en utilisant le token d'authentification
            const response = await axios.put('http://localhost:3001/api/v1/user/profile', {"firstName": first, "lastName": last}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // Affichage des données renvoyées par le serveur dans la console
            console.log(response.data);
             // Retourne une instance de ProfilModel contenant les données renvoyées par le serveur
            return new ProfilModel(response.data.body);
        } catch (error) {
            console.error(error);
            return null;
        }
    }
};

// Export de l'objet API pour qu'il soit accessible depuis d'autres fichiers
export default API;
