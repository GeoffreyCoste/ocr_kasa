import React, { useState } from 'react';
import './style.scss';

const Carousel = ({ pictures }) => {
  const [slides, setSlides] = useState(pictures); // array of pics paths
  const [visibleSlide, setVisibleSlide] = useState(0);

  const prev = () => {
    const index = visibleSlide === 0 ? slides.length - 1 : visibleSlide - 1;
    setVisibleSlide(index);
  };

  const next = () => {
    const index = visibleSlide === slides.length - 1 ? 0 : visibleSlide + 1;
    setVisibleSlide(index);
  };

  return (
    <div className="carousel">
      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="carousel__controls controls_prev"
            onClick={prev}
          >
            <div className="arrow arrow_left"></div>
          </button>
          <button
            type="button"
            className="carousel__controls controls_next"
            onClick={next}
          >
            <div className="arrow arrow_right"></div>
          </button>
        </>
      )}
      <div
        className="carousel__inner"
        style={{ transform: `translateX(-${visibleSlide * 100}%)` }}
      >
        {slides.map((slide, index) => {
          return (
            <div
              key={`${index}-b9fb52e4-51b2-45f8-bf16-1addaa3db52e`}
              className="carousel__inner__content slides"
            >
              <img src={slide} alt={`slide-${index}`} className="slides__img" />
            </div>
          );
        })}
      </div>
      {slides.length > 1 && (
        <div className="carousel__index">
          <span>
            {visibleSlide + 1}/{slides.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default Carousel;
