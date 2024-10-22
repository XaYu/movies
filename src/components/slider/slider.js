import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { SliderItem } from './sliderItem/sliderItem';
import { SliderArrow } from './sliderArrow/sliderArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import { Loading } from '../loading/loading';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: <SliderArrow />,
  prevArrow: <SliderArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export function MySlider({ items, loading = true }) {
  const [slides, setSlides] = useState([]);

  // const handleClick = () => {
  //   setSlides(
  //     slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6],
  //   );
  // };

  useEffect(() => {
    if (items && items.length > 0) {
      setSlides(items);
    }

    return () => {};
  }, [items]);

  return (
    <div className="m-slider">
      {/* <button className="button" type="button" onClick={handleClick}>
        Click to change slide count
      </button> */}
      <Loading visible={loading} className="m-slider__loading">
        <Slider {...settings}>
          {slides.map((slide) => {
            const { id, title, posterPath } = slide;

            return (
              <SliderItem key={id} title={title} posterPath={posterPath} />
            );
          })}
        </Slider>
      </Loading>
    </div>
  );
}

MySlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
};

export default MySlider;
