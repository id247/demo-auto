import React from 'react';
import PropTypes from 'prop-types';
import { fetchStatesPropType } from 'constants/propTypes';
import CarListItem from 'components/CarListItem';
import CarListList from './CarListList';
import './styles.scss';

function CarList({ carIds, fetchStates, pagination, renderCarListItem }) {
  let content;

  if (fetchStates.isIdle) {
    content = (
      <CarListList isFetching={fetchStates.isFetching}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="car-list__item">
            <CarListItem isIdle />
          </div>
        ))}
      </CarListList>
    );
  } else {
    content = (
      <>
        <CarListList isFetching={fetchStates.isFetching}>
          {carIds.map(id => (
            <div key={id} className="car-list__item">
              {renderCarListItem({ carId: id })}
            </div>
          ))}
        </CarListList>
        <div className="car-list__pagination">{pagination}</div>
      </>
    );
  }

  return <div className="car-list">{content}</div>;
}

CarList.propTypes = {
  fetchStates: fetchStatesPropType.isRequired,
  carIds: PropTypes.arrayOf(PropTypes.number),
  pagination: PropTypes.node.isRequired,
  renderCarListItem: PropTypes.func.isRequired
};
export default CarList;
