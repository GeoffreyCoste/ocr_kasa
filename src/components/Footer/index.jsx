import React from 'react';
import Logo from '../../assets/logo_white.png';
import './style.scss';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} className="logo-white" alt="Kasa logo blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
