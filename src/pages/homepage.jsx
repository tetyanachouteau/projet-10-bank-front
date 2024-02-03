import React from 'react';
import styles from "./homepage.module.css";
import Feature from '../components/Feature';

function Homepage() {
    return (
        <main>
            <div className={styles.hero}>
                <section className={styles.heroContent}>
                    <h2 className={styles.srOnly}>Promoted Content</h2>
                    <p className={styles.subtitle}>No fees.</p>
                    <p className={styles.subtitle}>No minimum deposit.</p>
                    <p className={styles.subtitle}>High interest rates.</p>
                    <p className={styles.text}>Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className={styles.features}>
                <h2 className={styles.srOnly}>Features</h2>
                <Feature image="./img/icon-chat.png" alt="Chat Icon" title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
                <Feature image="./img/icon-money.png" alt="Money Icon" title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!"/>
                <Feature image="./img/icon-security.png" alt="Security Icon" title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe."/>
            </section>
        </main>
    );
}

export default Homepage;
