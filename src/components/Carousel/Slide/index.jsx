import React from 'react';

const Slide = ({ src }) => {
  return (
    <li className="carousel__item">
      <img src={src} alt="" />
    </li>
  );
};

export default Slide;
