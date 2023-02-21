import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Navbar from '../Navbar';
import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Kasa logo" className="logo__img" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
