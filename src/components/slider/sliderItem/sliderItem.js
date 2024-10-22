import React from 'react';
import PropTypes from 'prop-types';

import configs from '../../../configs';
import './sliderItem.css';

export function SliderItem({ title, posterPath }) {
  return (
    <div>
      <div
        className="m-sliderItem"
        onClick={() => alert(title)}
        aria-hidden="true"
      >
        <img
          src={`${configs.BASE_POSTER_IMAGE_URL}/${posterPath}`}
          alt={title}
        />
        <div className="a-sliderItem__title">{title}</div>
      </div>
    </div>
  );
}

SliderItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
};

export default SliderItem;
