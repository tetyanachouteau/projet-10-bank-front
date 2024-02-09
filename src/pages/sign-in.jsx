
    // ligne 43 : affiche error en rouge si il y a une erreur (set Error)

import React, { useState } from 'react'; // Import de React et du hook useState depuis 'react'
import { useNavigate } from 'react-router-dom'; 
import styles from './sign-in.module.css'; // Import des styles CSS spécifiques à ce composant
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import API from '../services/requestApi'; // Import du module API depuis '../services/requestApi'

function SignIn() {
    // Définition des états et de la fonction navigate
    const [username, setUsername] = useState(""); // Initialisation de l'état username avec useState
    const [password, setPassword] = useState(""); // Initialisation de l'état password avec useState
    const [error, setError] = useState(null); // Initialisation de l'état error avec useState
    const navigate = useNavigate(); // Initialisation de la fonction navigate avec useNavigate

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
    const login = async () => {
        console.log(username); 
        console.log(password); 
        const data = await API.login(username, password); // Appel de la fonction login depuis le module API
        if (data.token) { // Si un jeton est renvoyé
            console.log(data.token); // Affichage du jeton dans la console
            const profile = await API.getUserProfile(data.token); // Appel de la fonction getUserProfile avec le jeton
            console.log(profile); 
            navigate("/user"); // Redirection vers la page utilisateur
        } else {
            setError(data); // Définition de l'erreur avec le message renvoyé
        }
    }
    
    // Retourne le contenu du composant
    return (
        <main className={[styles.main, styles.bgDark].join(" ")}>
            <section className={styles.signInContent}>
                <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} /> {/* Icône de connexion */}
                <h1>Sign In</h1> {/* Titre de la section */}
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Affichage de l'erreur si elle existe */}
                <form>
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
                    <button type="button" onClick={login} className={styles.signInButton}>Sign In</button> {/* Bouton de connexion est un bouton de connexion qui déclenche la fonction login lorsqu'il est cliqué. */}
                </form>
            </section>
        </main>
    );
}

export default SignIn; 
