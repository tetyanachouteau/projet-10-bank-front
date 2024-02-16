import { Routes, Route } from 'react-router-dom'; // Import des composants de routage de React Router
import { useSelector } from 'react-redux'; // Import du hook useSelector pour accéder à l'état Redux
import './App.css'; // Import du fichier CSS
import Homepage from './pages/homepage'; // Import des composants de page
import User from './pages/user';
import Erreur from './pages/erreur';
import Layout from './components/Layout'; // Import du composant de mise en page
import SignIn from './pages/sign-in'; // Import du composant de connexion
import SignOut from './pages/sign-out'; // Import du composant de déconnexion

function App() {
  // Utilisation du hook useSelector pour accéder à l'état isAuthenticated dans le store Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes> {/* Utilisation de Routes pour définir les routes de l'application */}
      {/* Route parente avec le Layout pour un rendu cohérent sur toutes les pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} /> {/* Route pour la page d'accueil */}
        {/* Route pour la page utilisateur, uniquement accessible si l'utilisateur est authentifié */}
        {isAuthenticated && <Route path="user" element={<User />} />}
        {/* Route pour la page de connexion */}
        {!isAuthenticated && <Route path="signin" element={<SignIn />} />}
        {/* Route pour la page de déconnexion */}
        <Route path="signout" element={<SignOut />} />
        {/* Route pour toutes les autres URL (erreur 404) */}
        <Route path="*" element={<Erreur />} />
      </Route>
    </Routes>
  );
}

export default App;
