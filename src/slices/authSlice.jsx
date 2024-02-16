// Import de la fonction createSlice depuis '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';

// Création d'un slice pour gérer l'état de l'authentification
const authSlice = createSlice({
    name: 'auth', // Nom du slice
    initialState: { // État initial du slice
        isAuthenticated: false, // L'utilisateur n'est pas authentifié par défaut
        token: null, // Pas de jeton d'authentification par défaut
        profile: null // Pas de profil utilisateur par défaut
    },
    reducers: { // Définition des reducers pour modifier l'état du slice
        login(state, action) { // Reducer pour gérer la connexion de l'utilisateur
            state.isAuthenticated = true; // Définir l'état d'authentification sur true
            state.token = action.payload.token; // Définir le jeton d'authentification avec celui fourni dans l'action
            state.profile = action.payload.profile; // Définir le profil utilisateur avec celui fourni dans l'action
        },
        logout(state) { // Reducer pour gérer la déconnexion de l'utilisateur
            state.isAuthenticated = false; // Définir l'état d'authentification sur false
            state.token = null; // Effacer le jeton d'authentification
            state.profile = null; // Effacer le profil utilisateur
        },
    },
});

// Export des actions de connexion et de déconnexion
export const { login, logout } = authSlice.actions;
// Export du reducer du slice
export default authSlice.reducer;
