import React from 'react';
import Logo from '../../assets/logo.png';
import Navbar from '../Navbar';
import './style.scss';

const Header = () => {
  return (
    <header>
      <div className="navbar-logo">
        <img src={Logo} alt="Kasa logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
