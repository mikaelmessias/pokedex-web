import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./styles.scss";

export const Slider = ({ items, backgroundColor }) => {
  const [activeSlide, setActiveSlide] = useState(0);  
  const [slideDirection, setSlideDirection] = useState('rightToLeft');

  const handleNextSlide = () => {
    setActiveSlide(activeSlide + 1);
    setSlideDirection('rightToLeft');
  };

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide - 1);
    setSlideDirection('leftToRight');
  };

  
  return (
    <div
      className="slider-wrapper" 
      style={{ backgroundColor }}
    >
      <div className="slider__items">
        {items.map(({ url, name }, index) => (
          <div key={url} className={classNames("slider__item", {
            "is-active": index === activeSlide,
            "is-prev": index < activeSlide,
            "slide-to-left": slideDirection === "rightToLeft",
            "slide-to-right": slideDirection === "leftToRight",
          })}>
            <img src={url} alt={name} title={name} />
          </div>
        ))}
      </div>

      <div className="slider__actions">
        <button
          className="slider-action slider-action__prev"
          onClick={handlePrevSlide}
          disabled={activeSlide < 1}
        >
          &#10094;
        </button>
        <button
          className="slider-action slider-action__next"
          onClick={handleNextSlide}
          disabled={activeSlide >= (items.length - 1)}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  backgroundColor: PropTypes.string,
};

Slider.defaultProps = {
  backgroundColor: '#5db9ff',
};