const prefix = 'carSearch/';

export const TOGGLE_CAR = `${prefix}TOGGLE_CAR`;

export const toggleFavoriteCar = payload => {
  return {
    type: TOGGLE_CAR,
    payload
  };
};
