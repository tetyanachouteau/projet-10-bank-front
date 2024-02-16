import React from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import du hook useNavigate depuis 'react-router-dom'
import { useDispatch } from 'react-redux'; // Import du hook useDispatch pour envoyer des actions Redux
import { logout as logoutAction } from '../slices/authSlice'; // Import de l'action de déconnexion depuis le slice authSlice

function SignOut() {
    const navigate = useNavigate(); // Initialisation de la fonction navigate avec useNavigate
    const dispatch = useDispatch(); // Initialisation de la fonction dispatch avec useDispatch

    // Fonction de déconnexion
    const logout = () => {
        dispatch(logoutAction()); // Dispatch de l'action de déconnexion
        navigate("/"); // Redirection vers la page d'accueil
    }

    // Appel de la fonction de déconnexion lors du rendu du composant
    return (<>{logout()}</>);
}

export default SignOut;
