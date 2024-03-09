import React, { useState } from 'react'; // Import de React
import Account from '../components/Account'; // Import du composant Account
import styles from './user.module.css'; // Import des styles CSS spécifiques à ce composant
import { useSelector } from 'react-redux'; // Import du hook useSelector pour accéder à l'état Redux

import API from '../services/requestApi'; // Import du module API depuis '../services/requestApi'

import { useDispatch } from 'react-redux'; // Import du hook useDispatch pour envoyer des actions Redux
import { updateProfile } from '../slices/authSlice'; // Import de l'action de connexion depuis le slice authSlice

function User() {
    // Utilisation du hook useSelector pour accéder au profil utilisateur dans le store Redux
    const profile = useSelector((state) => JSON.parse(state.auth.profile));
    const token = useSelector((state) => state.auth.token);
    const [isEdit, setIsEdit] = useState(false);
    const [errorFN, setErrorFN] = useState("");
    const [errorLN, setErrorLN] = useState("");
    // récupération des nouveaux nom et prenom
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);

    const dispatch = useDispatch(); // Initialisation de la fonction dispatch avec useDispatch

    const clickEdit = () => {
        setIsEdit(true);
    }

    const clickCancel = () => {
        setLastName(profile.lastName);
        setFirstName(profile.firstName);
        setErrorFN(null);
        setErrorLN(null);
        setIsEdit(false);
    }

    const clickSave = async (event) => {
        event.preventDefault();

        // vérifie last et first name
        let errorFN = validateInput(firstName);
        setErrorFN(errorFN);
        let errorLN = validateInput(lastName);
        setErrorLN(errorLN);

        // Sauvegarde du formaulaire

        if (firstName && lastName && !(errorFN || errorLN)) {
            const profile = await API.setUserNewNames(token, firstName, lastName);
            dispatch(updateProfile(JSON.stringify(profile)));
            setIsEdit(false);
        }
    }

    // Fonction pour gérer le changement de la valeur du prénom
    const changeFN = (event) => {
        // Récupérer la valeur saisie dans l'événement
        setFirstName(event.target.value);
    }


    const changeLN = (event) => {
        setLastName(event.target.value);
    }

    // Fonction pour valider une entrée
    const validateInput = (value) => {
        console.log(value); // Affiche la valeur pour le débogage
        let regex = /^[a-zA-Z]([a-zA-Z\s]*)[a-zA-Z]*$/gm; // Expression régulière pour vérifier si la valeur contient uniquement des lettres et espaces
        if (!value)
            return "La valeur ne peut pas être vide"; // Si la valeur est vide, renvoie un message d'erreur
        else if (!value.trim())
            return "La valeur ne peut pas être que des espaces"; // Si la valeur est composée uniquement d'espaces, renvoie un message d'erreur
        else if (!regex.test(value))
            return "La valeur ne peut contenir que les lettres"; // Si la valeur contient des caractères autres que des lettres et espaces, renvoie un message d'erreur
        return null; // Si la valeur est valide, retourne null
    }


    // Retourne le contenu du composant
    return (
        <main className={[styles.main, styles.bgDark].join(" ")}>
            <div className={styles.header}>
                <h1>Welcome back<br />{profile.firstName + " " + profile.lastName}!</h1> {/* Affichage du nom et prénom de l'utilisateur */}
                {!isEdit && <button className={styles.editButton} onClick={clickEdit}>Edit Name</button>} {/* Bouton pour éditer le nom qui fait apparaître le form */}
                {isEdit &&
                    <form>
                        {(errorFN || errorLN) && <div className={styles.errorBlock}>
                            <p className={`${styles.errorP} ${styles.errorPR}`}>{errorFN && errorFN}</p> {/* Affichage de l'erreur si elle existe */}
                            <p className={styles.errorP}>{errorLN && errorLN}</p> {/* Affichage de l'erreur si elle existe */}
                        </div>
                        }
                        <div className={styles.inputBlock}>
                            <input type='text' value={firstName} onChange={changeFN} />
                            <input type='text' value={lastName} onChange={changeLN} />
                        </div>
                        <div className={styles.buttonBlock}>
                            <input type='submit' onClick={clickSave} value='Save' />
                            <input type='button' onClick={clickCancel} value='Cancel' />
                        </div>
                    </form>
                }
            </div>
            <h2 className={styles.srOnly}>Accounts</h2> {/* Titre des comptes (non visible) */}
            {/* Composants Account pour afficher les différents comptes de l'utilisateur */}
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    );
}

// Export du composant User par défaut
export default User;
