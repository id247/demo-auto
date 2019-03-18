import React from 'react';
import PropTypes from 'prop-types';
import { carPropType, fetchStatesPropType } from 'constants/propTypes';
import FetchError from 'components/FetchError';
import CarLayout from 'components/CarLayout';
import FavoriteCar from 'components/FavoriteCar';
import CarDescription from 'components/CarDescription';

class Car extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { fetchCarAsync, carId } = this.props;
    fetchCarAsync({ carId });
  };

  render() {
    const {
      car = {},
      carId,
      fetchStates,
      toggleFavoriteCar,
      isFavorite
    } = this.props;

    if (fetchStates.isFetchingError) {
      return <FetchError fetchData={this.fetchData} />;
    }

    return (
      <CarLayout
        carImage={car.pictureUrl}
        carTitle={car.title}
        fetchStates={fetchStates}
        info={<CarDescription car={car} fetchStates={fetchStates} />}
        sidebar={
          <FavoriteCar
            carId={carId}
            isFavorite={isFavorite}
            fetchStates={fetchStates}
            toggleFavoriteCar={toggleFavoriteCar}
          />
        }
      />
    );
  }
}

Car.propTypes = {
  car: carPropType,
  fetchStates: fetchStatesPropType,
  carId: PropTypes.number.isRequired,
  fetchCarAsync: PropTypes.func.isRequired,
  toggleFavoriteCar: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

export default Car;
