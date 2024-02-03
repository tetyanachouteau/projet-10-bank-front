import styles from "./erreur.module.css"
import React from "react";

function Erreur() {
  return (
    <div className={styles.erreur}>
      <img src="./img/404.png" alt="Erreur 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
    </div>
  );
}

export default Erreur;
