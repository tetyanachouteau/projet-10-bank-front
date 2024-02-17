import React, { useState } from 'react'; // Import de React
import Account from '../components/Account'; // Import du composant Account
import styles from './user.module.css'; // Import des styles CSS spécifiques à ce composant
import { useSelector } from 'react-redux'; // Import du hook useSelector pour accéder à l'état Redux

function User() {
    // Utilisation du hook useSelector pour accéder au profil utilisateur dans le store Redux
    const profile = useSelector((state) => JSON.parse(state.auth.profile));
    const [isEdit, setIsEdit] = useState(false);

    const clickEdit = () => {
        setIsEdit(true);
    }

    const clickCancel = () => {
        setIsEdit(false);
    }

    const clickSave = () => {
        setIsEdit(false);
    }

    // Retourne le contenu du composant
    return (
        <main className={[styles.main, styles.bgDark].join(" ")}>
            <div className={styles.header}>
                <h1>Welcome back<br />{profile.firstName + " " + profile.lastName}!</h1> {/* Affichage du nom et prénom de l'utilisateur */}
                {!isEdit && <button className={styles.editButton} onClick={clickEdit}>Edit Name</button>} {/* Bouton pour éditer le nom qui fait apparaître le form */}
                {isEdit &&
                    <form>
                        <div className={styles.inputBlock}>
                            <input type='text' placeholder={profile.firstName} />
                            <input type='text' placeholder={profile.lastName} />
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
