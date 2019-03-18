import React from 'react';
import CarInfo from 'components/CarInfo';
import Text from 'components/Text';
import Idle from 'components/Idle';
import { carPropType, fetchStatesPropType } from 'constants/propTypes';
import './styles.scss';

function CarDescription({ car, fetchStates }) {
  return (
    <div className="car-description">
      <h1 className="car-description__title">
        {fetchStates.isIdle ? <Idle style={{ height: '30px' }} /> : car.title}
      </h1>
      <div className="car-description__info">
        {fetchStates.isIdle ? (
          <Idle style={{ height: '20px' }} />
        ) : (
          <CarInfo car={car} />
        )}
      </div>
      {fetchStates.isIdle ? (
        <Idle style={{ height: '60px' }} />
      ) : (
        car.text && (
          <div className="car-description__text">
            <Text>
              <p>{car.text}</p>
            </Text>
          </div>
        )
      )}
    </div>
  );
}

CarDescription.propTypes = {
  fetchStates: fetchStatesPropType.isRequired,
  car: carPropType
};

export default CarDescription;
