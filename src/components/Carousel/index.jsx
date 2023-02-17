import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import './style.scss';

const Carousel = ({ data }) => {
  const [pictures, setPictures] = useState(data);
  const [length, setLength] = useState(pictures.length);
  const [current, setCurrent] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const prev = () => {
    const index = current === 0 ? length - 1 : current - 1;
    setCurrent(index);
  };

  const next = () => {
    const index = current === length - 1 ? 0 : current + 1;
    setCurrent(index);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    setLength(pictures.length);
  }, [pictures]);

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="carousel__index__indicator">
        <span>
          {current + 1}/{length}
        </span>
      </div>
      <ul
        className="carousel__inner"
        /*         onAnimationEnd={handleEndpointTransition()} */
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {pictures.map((pic, index) => (
          <Slide
            src={pic}
            key={`${index}-cdeff86a-d565-47b1-ac8d-23adfb159a69`}
          />
        ))}
      </ul>
      <button type="button" className="carousel__control__prev" onClick={prev}>
        <div className="arrow left"></div>
      </button>
      <button type="button" className="carousel__control__next" onClick={next}>
        <div className="arrow right"></div>
      </button>
    </div>
  );
};

export default Carousel;
