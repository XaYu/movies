import React from 'react';
import PropTypes from 'prop-types';
import './details.css';

export function Details({ id, type }) {
  return <div className="m-movies">{`${type}: ${id}`}</div>;
}

Details.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Details;
