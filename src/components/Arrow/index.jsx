import React from 'react';
import './style.scss';

const Arrow = ({ isActive }) => {
  return (
    <div className={`arrow ${isActive ? 'active' : ''}`}>
      <span></span>
      <span></span>
    </div>
  );
};

export default Arrow;
