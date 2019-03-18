const prefix = 'carSearch/';

export const ADD_CARS = `${prefix}ADD_CARS`;

export const addCars = payload => {
  return {
    type: ADD_CARS,
    payload
  };
};

export const ADD_CAR = `${prefix}ADD_CAR`;

export const addCar = payload => {
  return {
    type: ADD_CAR,
    payload
  };
};
