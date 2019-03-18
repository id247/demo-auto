import { testActionCreator } from 'utils/tests';
import { ADD_CARS, addCars, ADD_CAR, addCar } from '../cars';

[{ type: ADD_CARS, fn: addCars }, { type: ADD_CAR, fn: addCar }].map(
  testActionCreator
);
