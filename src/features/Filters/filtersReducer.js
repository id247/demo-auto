import fetchStates from 'constants/fetchStates';
import { getNewStateMachineState } from 'utils/stateMachine';
import { fetchFiltersActions } from './filtersActions';

const stateMachine = {
  [fetchStates.idle]: {
    name: fetchStates.idle,
    to: {
      [fetchFiltersActions.successType]: fetchStates.done,
      [fetchFiltersActions.failType]: fetchStates.error
    }
  },
  [fetchStates.fetching]: {
    name: fetchStates.fetching,
    to: {
      [fetchFiltersActions.successType]: fetchStates.done,
      [fetchFiltersActions.failType]: fetchStates.error
    }
  },
  [fetchStates.done]: {
    name: fetchStates.done,
    to: {
      [fetchFiltersActions.requestType]: fetchStates.fetching
    }
  },
  [fetchStates.error]: {
    name: fetchStates.error,
    to: {
      [fetchFiltersActions.requestType]: fetchStates.idle
    }
  }
};

const initialState = {
  fetchState: fetchStates.idle,
  items: []
};

const filtersReducer = (state = initialState, { type, payload }) => {
  const fetchState = getNewStateMachineState(
    stateMachine,
    state.fetchState,
    type
  );

  switch (type) {
    case fetchFiltersActions.requestType:
    case fetchFiltersActions.failType:
      return {
        ...state,
        fetchState
      };
    case fetchFiltersActions.successType:
      return {
        ...state,
        fetchState,
        items: payload.filters
      };
    default:
      return state;
  }
};

export default filtersReducer;
