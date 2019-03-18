import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Wrapper({ size = 'l', children }) {
  return <div className={`wrapper wrapper--${size}`}>{children}</div>;
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string
};

export default Wrapper;
