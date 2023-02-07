import React, { useState } from 'react';
/* import { Link } from 'react-router-dom'; */
import Navlink from './Navlink';

const navLinks = [
  {
    title: 'Accueil',
    to: '/',
  },
  {
    title: 'A propos',
    to: '/about',
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (index) => {
    setActiveLink(index);
    console.log(activeLink);
  };

  return (
    <nav className="navbar-nav">
      <ul className="nav-list">
        {navLinks.map((link, index) => {
          return (
            <li
              className="nav-item"
              key={`${index}-3226a4df-d85e-4088-8e5a-24a6830fa819`}
              onClick={() => handleClick(index)}
            >
              <Navlink
                to={link.to}
                title={link.title}
                active={activeLink === index ? true : false}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
