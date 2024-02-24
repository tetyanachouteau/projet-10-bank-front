import React from 'react'; // Import de React
import { Link } from 'react-router-dom'; // Import du composant Link de React Router
import styles from './Header.module.css'; // Import des styles CSS
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'; // Import de l'icône utilisateur
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import du composant FontAwesomeIcon
import { useSelector } from 'react-redux'; // Import du hook useSelector pour accéder à l'état Redux

function Header() {
    // Utilisation du hook useSelector pour accéder à l'état du profil dans le store Redux
    const profile = useSelector((state) => JSON.parse(state.auth.profile));

    return (
        <nav className={styles.mainNav}> {/* Création de la barre de navigation */}
            <Link to={"/"} className={styles.mainNavLogo}> {/* Lien vers la page d'accueil */}
                <img
                    className={styles.mainNavLogoImage}
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className={styles.srOnly}>Argent Bank</h1>
            </Link>
            <div className={styles.profileContainer}>
                <div className={styles.profileSubContainer}>
                {profile &&
                    <>
                        <FontAwesomeIcon icon={faUserCircle} />{" "} {/* Icône utilisateur */}
                        {profile && profile.firstName}{/* Affichage du nom d'utilisateur */}
                    </>
                }
                </div>
                <div className={styles.profileSubContainer}>
                {/* Lien vers la page de connexion ou de déconnexion en fonction de l'état du profil */}
                <FontAwesomeIcon icon={profile ? faSignOut : faUserCircle} />{" "} {/* Icône deconnexion ou utilisateur */}
                <Link to={profile ? "/signout" : "/signin"} className={styles.mainNavItem}>
                    {profile ? "Sign out" : "Sign in"} {/* Affichage "Sign Out" ou "Sign In" */}
                </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
