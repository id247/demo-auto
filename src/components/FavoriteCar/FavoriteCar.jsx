import React from 'react';
import PropTypes from 'prop-types';
import { fetchStatesPropType } from 'constants/propTypes';
import Button from 'controls/Button';
import Text from 'components/Text';
import Idle from 'components/Idle';
import SidebarItem from 'components/SidebarItem';
import SidebarButton from 'components/SidebarButton';
import './styles.scss';

function FavoriteCar({ isFavorite, toggleFavoriteCar, carId, fetchStates }) {
  return (
    <SidebarItem>
      <Text>
        {fetchStates.isIdle ? (
          <Idle style={{ height: '40px' }} />
        ) : (
          <p>
            {isFavorite
              ? 'The car is in your favorites.'
              : 'If you like this car, click the button and save it in your collection of favourite items.'}
          </p>
        )}
      </Text>
      <SidebarButton>
        {fetchStates.isIdle ? (
          <Idle
            style={{ display: 'inline-block', width: '128px', height: '30px' }}
          />
        ) : (
          <Button type="button" onClick={() => toggleFavoriteCar({ carId })}>
            {isFavorite ? 'Remove' : 'Save'}
          </Button>
        )}
      </SidebarButton>
    </SidebarItem>
  );
}

FavoriteCar.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  toggleFavoriteCar: PropTypes.func.isRequired,
  carId: PropTypes.number.isRequired,
  fetchStates: fetchStatesPropType
};

export default FavoriteCar;
