import React from 'react';
import './style.scss';

const Star = ({ selected }) => {
  return <span className={`star ${selected ? 'star_selected' : ''}`}></span>;
};

export default Star;
