import { createSelector } from 'reselect';
import { favoritesSelector } from 'selectors/favorites';

export const carsSelector = state => state.cars;

export const propCarIdSelector = (_, props) => props.carId;

export const carByIdSelector = createSelector(
  carsSelector,
  propCarIdSelector,
  (cars, carId) => cars[carId]
);

export const isFavoriteSelector = createSelector(
  favoritesSelector,
  propCarIdSelector,
  (favorites, carId) => !!favorites[carId]
);
