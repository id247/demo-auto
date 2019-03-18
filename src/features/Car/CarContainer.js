import { connect } from 'react-redux';
import { fetchCarAsync } from './carActions';
import { carByIdSelector, isFavoriteSelector } from 'selectors/cars';
import { carFetchStatesSelector } from './carSelectors';
import { toggleFavoriteCar } from 'actions/favorites';
import Car from './Car';

export default connect(
  (state, ownProps) => ({
    car: carByIdSelector(state, ownProps),
    fetchStates: carFetchStatesSelector(state),
    isFavorite: isFavoriteSelector(state, ownProps)
  }),
  {
    fetchCarAsync,
    toggleFavoriteCar
  }
)(Car);
