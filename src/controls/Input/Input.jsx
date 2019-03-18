import React from 'react';
import testIds from 'constants/testIds';
import './styles.scss';

function Input(props) {
  return (
    <input
      data-testid={testIds.input}
      type="text"
      className="input"
      {...props}
    />
  );
}

export default Input;
