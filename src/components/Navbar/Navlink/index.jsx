import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = ({ to, title, active }) => {
  return (
    <Link to={to} className={`nav-link ${active ? 'active' : ''}`}>
      {title}
    </Link>
  );
};

export default Navlink;
