import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Text({ children }) {
  return <div className="text">{children}</div>;
}

Text.propTypes = {
  children: PropTypes.node.isRequired
};

export default Text;
