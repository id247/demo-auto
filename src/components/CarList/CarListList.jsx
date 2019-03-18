import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CarListList({ isFetching, children }) {
  return (
    <div
      className={classNames('car-list__list', {
        'car-list__list--is-fetching': isFetching
      })}
    >
      {children}
    </div>
  );
}

CarListList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default CarListList;
