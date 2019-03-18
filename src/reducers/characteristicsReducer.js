import { ADD_CHARACERISTIC } from 'actions/characteristics';

const initialState = {};

const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHARACERISTIC: {
      return { ...state, [payload.name]: payload.items };
    }
    default:
      return state;
  }
};

export default filtersReducer;
