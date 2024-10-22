import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './loading.css';

export function Loading({ children, visible = true, className }) {
  return (
    <div className="m-loadingParent">
      {children}
      {visible && (
        <div className={classnames('m-loading', className)}>
          <div className="a-loadingShield" />
          <div className="m-loadingArea">
            <div className="m-loadingSpinner" />
          </div>
        </div>
      )}
    </div>
  );
}

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  className: PropTypes.string,
};

export default Loading;
