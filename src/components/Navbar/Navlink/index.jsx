import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = ({ to, title, active }) => {
  return (
    <Link to={to} className={`nav__link ${active ? 'nav__link_active' : ''}`}>
      {title}
    </Link>
  );
};

export default Navlink;
