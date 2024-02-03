import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sign-in.module.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SignIn() {
    return (
        <main className={[styles.main, styles.bgDark].join(" ")}>
            <section className={styles.signInContent}>
                <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} />
                <h1>Sign In</h1>
                <form>
                <div className={styles.inputWrapper}>
                    <label htmlFor="username">Username</label
                    ><input type="text" id="username" />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="password">Password</label
                    ><input type="password" id="password" />
                </div>
                <div className={styles.inputRemember}>
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                    >Remember me</label
                    >
                </div>
                <Link to={"/user"} className={styles.signInButton}>Sign In</Link>
                </form>
            </section>
        </main>
    );
}

export default SignIn;
