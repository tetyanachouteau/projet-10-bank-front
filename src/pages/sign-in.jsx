
// ligne 43 : affiche error en rouge si il y a une erreur (set Error)

import React, { useState } from 'react'; // Import de React et du hook useState depuis 'react'
import { useNavigate } from 'react-router-dom'; // Import du hook useNavigate depuis 'react-router-dom'
import styles from './sign-in.module.css'; // Import des styles CSS spécifiques à ce composant
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import de l'icône utilisateur
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import du composant FontAwesomeIcon

import API from '../services/requestApi'; // Import du module API depuis '../services/requestApi'

import { useDispatch } from 'react-redux'; // Import du hook useDispatch pour envoyer des actions Redux
import { login as loginAction } from '../slices/authSlice'; // Import de l'action de connexion depuis le slice authSlice

function SignIn() {
    // Définition des états et de la fonction navigate
    const [username, setUsername] = useState(""); // Initialisation de l'état username avec useState
    const [password, setPassword] = useState(""); // Initialisation de l'état password avec useState
    const [error, setError] = useState(null); // Initialisation de l'état error avec useState
    const navigate = useNavigate(); // Initialisation de la fonction navigate avec useNavigate
    const dispatch = useDispatch(); // Initialisation de la fonction dispatch avec useDispatch

    // Fonction pour mettre à jour l'état username
    const usernameChange = (e) => {
        setUsername(e.target.value); // Mise à jour de l'état username avec la valeur saisie
        setError(null); // Réinitialisation de l'erreur à null
    }

    // Fonction pour mettre à jour l'état password
    const passwordChange = (e) => {
        setPassword(e.target.value); // Mise à jour de l'état password avec la valeur saisie
        setError(null); // Réinitialisation de l'erreur à null
    }

    // Fonction de connexion
    const login = async (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire
        const data = await API.login(username, password); // Appel de la fonction login depuis le module API
        if (data.token) { // Si un jeton est renvoyé
            const profile = await API.getUserProfile(data.token); // Appel de la fonction getUserProfile avec le jeton
            dispatch(loginAction({ token: data.token, profile: JSON.stringify(profile) })); // Dispatch de l'action de connexion avec le jeton et le profil
            navigate("/user"); // Redirection vers la page utilisateur
        } else {
            setError("Error: Invalid credentials"); // Définition de l'erreur avec le message renvoyé
        }
    }

    // Retourne le contenu du composant
    return (
        <main className={[styles.main, styles.bgDark].join(" ")}>
            <section className={styles.signInContent}>
                <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} /> {/* Icône de connexion */}
                <h1>Sign In</h1> {/* Titre de la section */}
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Affichage de l'erreur si elle existe */}
                <form onSubmit={login}> {/* Formulaire de connexion */}
                    <div className={styles.inputWrapper}>
                        <label htmlFor="username">Username</label> {/* Champ de saisie pour le nom d'utilisateur */}
                        <input type="text" id="username" value={username} onChange={usernameChange} autoComplete="email" /> {/* Champ de saisie du nom d'utilisateur */}
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="password">Password</label> {/* Champ de saisie pour le mot de passe */}
                        <input type="password" id="password" value={password} onChange={passwordChange} autoComplete="password" /> {/* Champ de saisie du mot de passe */}
                    </div>
                    <div className={styles.inputRemember}>
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label> {/* Case à cocher pour se souvenir de l'utilisateur */}
                    </div>
                    <button type="submit" className={styles.signInButton}>Sign In</button> {/* Bouton de connexion */}
                </form>
            </section>
        </main>
    );
}

export default SignIn;
