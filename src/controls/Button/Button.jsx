import React from 'react';
import PropTypes from 'prop-types';
import testIds from 'constants/testIds';
import './styles.scss';

function Button({ type = 'button', children, ...props }) {
  return (
    <button
      data-testid={testIds.button}
      type={type}
      className="button button--primary"
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
};

export default Button;
