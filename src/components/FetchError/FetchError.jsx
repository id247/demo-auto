import React from 'react';
import PropTypes from 'prop-types';
import Button from 'controls/Button';
import './styles.scss';

function FetchError({ fetchData }) {
  return (
    <div className="error">
      <div className="error__text">Something went wrong</div>
      <Button onClick={fetchData}>Retry</Button>
    </div>
  );
}

FetchError.propTypes = {
  fetchData: PropTypes.func.isRequired
};

export default FetchError;
