import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Error = () => {
  return (
    <main id="error">
      <span>404</span>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="nav-link">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default Error;
