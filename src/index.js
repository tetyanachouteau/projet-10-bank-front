//index.js - Fichier d'entrée principal d'application, où on configure et monte application React
//store.js a pour but de configurer le store Redux en utilisant Redux Toolkit (Provider).  
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import de ReactDOM pour créer le root
import { BrowserRouter } from "react-router-dom"; // Import du BrowserRouter pour gérer les routes
import { Provider } from 'react-redux'; // Import du Provider pour envelopper l'application avec Redux
import App from './App'; // Import du composant principal de l'application
import store from './store'; // Import du store Redux

const root = document.getElementById('root'); // Récupération de l'élément root du DOM

// Utilisation de ReactDOM.createRoot() pour créer le root et render l'application
ReactDOM.createRoot(root).render(
  <Provider store={store}> {/* Envelopper l'application avec le Provider pour rendre le store Redux accessible */}
    <React.StrictMode> {/* Utilisation de React.StrictMode pour détecter les problèmes potentiels */}
      <BrowserRouter> {/* Utilisation de BrowserRouter pour gérer les routes */}
        <App /> {/* Rendu du composant principal de l'application */}
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
