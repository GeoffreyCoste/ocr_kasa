import React, { useState } from 'react';
import Navlink from './Navlink';
import './style.scss';

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
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navLinks.map((link, index) => {
          return (
            <li
              className="nav__item"
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
