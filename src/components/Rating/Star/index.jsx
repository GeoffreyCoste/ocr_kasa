import React from 'react';
import './style.scss';

const Star = ({ selected }) => {
  return <span className={`star ${selected ? 'selected' : ''}`}></span>;
};

export default Star;
