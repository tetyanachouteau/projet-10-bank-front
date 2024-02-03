import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <nav className={styles.mainNav}>
            <Link to={"/"} className={styles.mainNavLogo}>
                <img
                className={styles.mainNavLogoImage}
                src="./img/argentBankLogo.png"
                alt="Argent Bank Logo"
                />
                <h1 className={styles.srOnly}>Argent Bank</h1>
            </Link>
            <div>
                <Link to={"/signin"} className={styles.mainNavItem}>
                <FontAwesomeIcon icon={faUserCircle} />{" "}
                Sign In
                </Link>
            </div>
        </nav>
    );
}
export default Header;