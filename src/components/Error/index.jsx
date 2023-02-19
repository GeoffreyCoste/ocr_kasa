import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Error = () => {
  return (
    <main className="main main_error">
      <div className="error">
        <span className="error__code">404</span>
        <p className="error__message">
          Oups ! La page que vous demandez n'existe pas.
        </p>
      </div>

      <Link to="/" className="nav-link">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default Error;
