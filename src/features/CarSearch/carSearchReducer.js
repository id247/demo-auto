import fetchStates from 'constants/fetchStates';
import { getNewStateMachineState } from 'utils/stateMachine';
import { fetchCarsActions } from './carSearchActions';

const stateMachine = {
  [fetchStates.idle]: {
    name: fetchStates.idle,
    to: {
      [fetchCarsActions.successType]: fetchStates.done,
      [fetchCarsActions.failType]: fetchStates.error
    }
  },
  [fetchStates.fetching]: {
    name: fetchStates.fetching,
    to: {
      [fetchCarsActions.successType]: fetchStates.done,
      [fetchCarsActions.failType]: fetchStates.error
    }
  },
  [fetchStates.done]: {
    name: fetchStates.done,
    to: {
      [fetchCarsActions.requestType]: fetchStates.fetching
    }
  },
  [fetchStates.error]: {
    name: fetchStates.error,
    to: {
      [fetchCarsActions.requestType]: fetchStates.idle
    }
  }
};

export const initialState = {
  ids: [],
  totalItems: 0,
  fetchState: fetchStates.idle
};

const carSearchReducer = (state = initialState, { type, payload }) => {
  const fetchState = getNewStateMachineState(
    stateMachine,
    state.fetchState,
    type
  );

  switch (type) {
    case fetchCarsActions.requestType:
    case fetchCarsActions.failType:
      return { ...state, fetchState };
    case fetchCarsActions.successType:
      return {
        ...state,
        ids: payload.carIds,
        totalItems: payload.totalItems,
        fetchState
      };
    default:
      return state;
  }
};

export default carSearchReducer;
