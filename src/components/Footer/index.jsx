import React from 'react';
import Logo from '../../assets/logo_white.png';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={Logo} className="logo__img" alt="Kasa logo blanc" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
