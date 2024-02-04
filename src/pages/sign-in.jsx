import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './sign-in.module.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../services/requestApi';

function SignIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const usernameChange = (e) => {
        setUsername(e.target.value);
        setError(null);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
        setError(null);
    }

    const login = async () => {
        console.log(username);
        console.log(password);
        const token = await API.login(username, password);
        if (token) {
            console.log(token);
            navigate("/user");
        } else {
            setError("Error during login !");
        }
    }
    // ligne 43 : affiche error en rouge si il y a une erreur (set Error)
    return (
        <main className={[styles.main, styles.bgDark].join(" ")}>
            <section className={styles.signInContent}>
                <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} />
                <h1>Sign In</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="username">Username</label
                        ><input type="text" id="username" value={username} onChange={usernameChange} autoComplete="email" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="password">Password</label
                        ><input type="password" id="password" value={password} onChange={passwordChange} autoComplete="password" />
                    </div>
                    <div className={styles.inputRemember}>
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                        >Remember me</label
                        >
                    </div>
                    <button type="button" onClick={login} className={styles.signInButton}>Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default SignIn;
