import { ADD_CARS, ADD_CAR } from 'actions/cars';

const initialState = {};

const carsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CARS:
      return { ...state, ...payload.cars };
    case ADD_CAR:
      return { ...state, [payload.car.id]: payload.car };
    default:
      return state;
  }
};

export default carsReducer;
