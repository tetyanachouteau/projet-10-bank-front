// Import de la fonction createSlice depuis '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';

// Création d'un slice pour gérer l'état de l'authentification
const authSlice = createSlice({
    name: 'auth', // Nom du slice
    initialState: { // État initial du slice
        // met à jour depuis le localstorage du navigateur
        // on vérife la valeur si pas de valeur on met false
        isAuthenticated: localStorage.getItem("isAuthenticated") ?? false, // L'utilisateur n'est pas authentifié par défaut
        token: localStorage.getItem("token"), // Pas de jeton d'authentification par défaut
        profile: localStorage.getItem("profile") // Pas de profil utilisateur par défaut
    },//local storage
    reducers: { // Définition des reducers pour modifier l'état du slice
        login(state, action) { // Reducer pour gérer la connexion de l'utilisateur
            state.isAuthenticated = true; // Définir l'état d'authentification sur true
            localStorage.setItem("isAuthenticated", true);
            state.token = action.payload.token; // Définir le jeton d'authentification avec celui fourni dans l'action
            localStorage.setItem("token", action.payload.token);
            state.profile = action.payload.profile; // Définir le profil utilisateur avec celui fourni dans l'action
            localStorage.setItem("profile", action.payload.profile);
        },
        logout(state) { // Reducer pour gérer la déconnexion de l'utilisateur
            state.isAuthenticated = false; // Définir l'état d'authentification sur false
            state.token = null; // Effacer le jeton d'authentification
            state.profile = null; // Effacer le profil utilisateur
            localStorage.clear();
        },
        updateProfile(state, action){
            state.profile = action.payload; // Définir le profil utilisateur avec celui fourni dans l'action
            localStorage.setItem("profile", action.payload);
        }
    },
});

// Export des actions de connexion et de déconnexion
export const { login, logout, updateProfile } = authSlice.actions;
// Export du reducer du slice
export default authSlice.reducer;
