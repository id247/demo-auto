import { TOGGLE_CAR } from 'actions/favorites';
import { omit } from 'utils/object';

const initialState = {};

const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CAR: {
      if (state[payload.carId]) {
        return omit(state, payload.carId);
      }
      return { ...state, [payload.carId]: true };
    }
    default:
      return state;
  }
};

export default favoritesReducer;
