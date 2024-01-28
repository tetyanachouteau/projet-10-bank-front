import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import User from './pages/user';
import Erreur from './pages/erreur';
import Layout from './components/Layout';
import SignIn from './pages/sign-in';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Login />} />
        <Route path="user" element={<User />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="*" element={<Erreur />} />
      </Route>
    </Routes>
  );
}

export default App;
