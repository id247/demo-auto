import { combineReducers } from 'redux';

import carSearchReducer from 'features/CarSearch/carSearchReducer';
import filtersReducer from 'features/Filters/filtersReducer';
import carReducer from 'features/Car/carReducer';
import characteristicsReducer from './characteristicsReducer';
import favoritesReducer from './favoritesReducer';
import carsReducer from './carsReducer';

export default combineReducers({
  characteristics: characteristicsReducer,
  favorites: favoritesReducer,
  carSearch: carSearchReducer,
  filters: filtersReducer,
  cars: carsReducer,
  car: carReducer
});
