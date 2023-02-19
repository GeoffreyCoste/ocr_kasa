import React, { useState, useEffect, useRef } from 'react';
import './style.scss';

const CarouselCustom = ({
  pictures,
  speed = 3000,
  transitionSpeed = 500,
  slideWidth = 1130,
  slideHeight = 415,
  auto,
  manual,
  index,
}) => {
  const [slides, setSlides] = useState(pictures);
  const [visibleSlide, setVisibleSlide] = useState(1);
  const [transition, setTransition] = useState(true);
  const [touchPosition, setTouchPosition] = useState(null);
  const [prevAndNextDisabled, setPrevAndNextDisabled] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    const slidesClones = [...pictures];
    slidesClones.unshift(slidesClones[slidesClones.length - 1]);
    slidesClones.push(slidesClones[1]);
    setSlides(slidesClones);

    /* if (!!autoMode) {
      start();
    } */
  }, []);

  useEffect(() => {
    if (visibleSlide === slides.length - 1) {
      setPrevAndNextDisabled(true);
      setTimeout(() => {
        setTransition(false);
        setVisibleSlide(1);
      }, transitionSpeed);
    }

    if (visibleSlide === 1) {
      setTimeout(() => {
        setTransition(true);
      }, transitionSpeed);
    }

    if (visibleSlide === 0) {
      setPrevAndNextDisabled(true);
      setTimeout(() => {
        setTransition(false);
        setVisibleSlide(slides.length - 2);
      }, transitionSpeed);
    }

    if (visibleSlide === slides.length - 2) {
      setTimeout(() => {
        setTransition(true);
      }, transitionSpeed);
    }
  }, [visibleSlide]);

  useEffect(() => {
    if (prevAndNextDisabled) {
      setTimeout(() => {
        setPrevAndNextDisabled(false);
      }, transitionSpeed * 2);
    }
  }, [prevAndNextDisabled]);

  const start = () => {
    setAutoPlay(true);
    if (intervalId.current != null) return;
    intervalId.current = setInterval(() => {
      setVisibleSlide((prevVisibleSlide) => {
        if (prevVisibleSlide + 1 === slides.length) {
          return 0;
        }
        return prevVisibleSlide + 1;
      });
    }, speed);
  };

  const pause = () => {
    clearInterval(intervalId.current);
  };

  const restart = () => {
    intervalId.current = setInterval(() => {
      setVisibleSlide((prevVisibleSlide) => {
        if (prevVisibleSlide + 1 === slides.length) {
          return 0;
        }
        return prevVisibleSlide + 1;
      });
    }, speed);
  };

  const stop = () => {
    setAutoPlay(false);
    clearInterval(intervalId.current);
  };

  const prev = () => {
    setVisibleSlide(visibleSlide - 1);
  };

  const next = () => {
    setVisibleSlide(visibleSlide + 1);
  };

  const touchStart = (e) => {
    console.log('touch start');
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const touchMove = (e) => {
    console.log('touch move');
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

  const calculateLeftMargin = () => {
    return '-' + visibleSlide * slideWidth + 'px';
  };

  const slideDimensionsStyle = () => {
    return { width: slideWidth + 'px', height: slideHeight + 'px' };
  };

  const dotIsActive = (index) => {
    return (
      index === visibleSlide ||
      (index === 1 && visibleSlide === slides.length - 1) ||
      (index === slides.length - 2 && visibleSlide === 0)
    );
  };

  return (
    <div className="carousel" onTouchStart={touchStart} onTouchMove={touchMove}>
      <div
        className="carousel__inner"
        style={slideDimensionsStyle()}
        onMouseEnter={() => {
          autoPlay && pause();
        }}
        onMouseLeave={() => {
          autoPlay && restart();
        }}
      >
        {manual && slides.length > 1 && (
          <>
            <button
              type="button"
              className={`carousel__controls__prev${
                prevAndNextDisabled ? '_disabled' : ''
              }`}
              onClick={!prevAndNextDisabled ? prev : null}
            >
              <div className="arrow left"></div>
            </button>
            <button
              type="button"
              className={`carousel__controls__next${
                prevAndNextDisabled ? '_disabled' : ''
              }`}
              onClick={!prevAndNextDisabled ? next : null}
            >
              <div className="arrow right"></div>
            </button>
          </>
        )}
        <div
          className={`carousel__inner__slides slides${
            transition ? '_transition' : ''
          }`}
          style={{ left: calculateLeftMargin() }}
        >
          {slides.map((slide, index) => {
            return (
              <div
                key={`${index}-b9fb52e4-51b2-45f8-bf16-1addaa3db52e`}
                className="slides__item"
                style={slideDimensionsStyle()}
              >
                <div className="slides__content">
                  <img src={slide} alt="" className="slide__img" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="carousel__inner__menu menu">
          {auto && (
            <div className="menu__player">
              <button
                type="button"
                className="menu__player__btn"
                onClick={!autoPlay ? start : !prevAndNextDisabled ? stop : null}
              >
                <span className={autoPlay ? 'square' : 'caret-right'}></span>
              </button>
            </div>
          )}
          <div className="menu__indicators">
            {slides.map((slide, index) => {
              if (index === 0 || index === slides.length - 1) return null;
              return (
                <div
                  key={`${index}-3dd0598f-2dec-4c2e-a4a8-e246011ab9d1`}
                  className={`menu__indicators__dots ${
                    dotIsActive(index) ? 'dots_active' : ''
                  }`}
                  onClick={() => setVisibleSlide(index)}
                ></div>
              );
            })}
          </div>
          {index && (
            <div className="menu__index">
              <span>
                {visibleSlide === 0
                  ? 1
                  : visibleSlide === slides.length - 1
                  ? 1
                  : visibleSlide}
                /{slides.length - 2}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCustom;
