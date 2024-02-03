import React from 'react';
import Account from '../components/Account';
import styles from './user.module.css';

function User() {
    return (
        <main className={[styles.main, styles.bgDark].join(" ")}>
            <div className={styles.header}>
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className={styles.editButton}>Edit Name</button>
            </div>
            <h2 className={styles.srOnly}>Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
        </main>
    );
}

// Export du composant Dashboard par défaut
export default User;
