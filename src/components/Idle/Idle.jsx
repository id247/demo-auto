import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Idle({ style }) {
  return (
    <span className="idle" style={style}>
      &nbsp;
    </span>
  );
}

Idle.propTypes = {
  style: PropTypes.object
};

export default Idle;
