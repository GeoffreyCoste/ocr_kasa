import React from 'react';
import './style.scss';

const AnimatedArrow = ({ isActive }) => {
  return (
    <div
      className={`animated-arrow ${isActive ? 'animated-arrow_active' : ''}`}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default AnimatedArrow;
