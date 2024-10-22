import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './sliderArrow.css';

export function SliderArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={classnames('m-sliderArrow', className)}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}

SliderArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default SliderArrow;
