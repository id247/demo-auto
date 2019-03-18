import { testActionCreator } from 'utils/tests';
import { TOGGLE_CAR, toggleFavoriteCar } from '../favorites';

[{ type: TOGGLE_CAR, fn: toggleFavoriteCar }].map(testActionCreator);
