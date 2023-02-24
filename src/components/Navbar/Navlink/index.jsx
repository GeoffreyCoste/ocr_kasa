import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navlink = ({ to, title, active }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={`nav__link ${
        pathname.split('/')[1] !== 'apartment' && active
          ? 'nav__link_active'
          : ''
      }`}
    >
      {title}
    </Link>
  );
};

export default Navlink;
