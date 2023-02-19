import React from 'react';
import Logo from '../../assets/logo.png';
import Navbar from '../Navbar';
import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Kasa logo" className="logo__img" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
