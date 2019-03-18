import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { carPropType } from 'constants/propTypes';
import CarInfo from 'components/CarInfo';
import Idle from 'components/Idle';
import routes from 'constants/routes';
import './styles.scss';

function CarListItem({ car = {}, isIdle, isFavorite }) {
  return (
    <div
      className={classNames('car-list-item', {
        'car-list-item--is-favorite': isFavorite
      })}
    >
      <div className="car-list-item__image-wrapper">
        {isIdle ? (
          <Idle style={{ width: '100%', heigth: '100%' }} />
        ) : (
          <img
            src={car.pictureThumb}
            alt={car.title}
            className="car-list-item__image"
          />
        )}
      </div>
      <div className="car-list-item__content">
        <h3 className="car-list-item__title">
          {isIdle ? (
            <Idle style={{ width: '50%', heigth: '30px' }} />
          ) : (
            car.title
          )}
        </h3>
        <div className="car-list-item__info">
          {isIdle ? (
            <>
              <Idle
                style={{ width: '70%', heigth: '20px', marginBottom: '5px' }}
              />
              <Idle style={{ width: '70%', heigth: '20px' }} />
            </>
          ) : (
            <CarInfo car={car} />
          )}
        </div>
        {isIdle ? (
          <Idle style={{ width: '60px', heigth: '20px' }} />
        ) : (
          <Link to={`${routes.car}/${car.id}`} className="car-list-item__link">
            View details
          </Link>
        )}
      </div>
    </div>
  );
}

CarListItem.propTypes = {
  car: carPropType,
  isIdle: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool
};

export default CarListItem;
