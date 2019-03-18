import fetchStates from 'constants/fetchStates';
import { getNewStateMachineState } from 'utils/stateMachine';
import { fetchCarActions } from './carActions';

const stateMachine = {
  [fetchStates.idle]: {
    name: fetchStates.idle,
    to: {
      [fetchCarActions.successType]: fetchStates.done,
      [fetchCarActions.failType]: fetchStates.error
    }
  },
  [fetchStates.fetching]: {
    name: fetchStates.fetching,
    to: {
      [fetchCarActions.successType]: fetchStates.done,
      [fetchCarActions.failType]: fetchStates.error
    }
  },
  [fetchStates.done]: {
    name: fetchStates.done,
    to: {
      [fetchCarActions.requestType]: fetchStates.fetching
    }
  },
  [fetchStates.error]: {
    name: fetchStates.error,
    to: {
      [fetchCarActions.requestType]: fetchStates.idle
    }
  }
};

const initialState = {
  fetchState: fetchStates.idle
};

const carSearchReducer = (state = initialState, { type, payload }) => {
  const fetchState = getNewStateMachineState(
    stateMachine,
    state.fetchState,
    type
  );

  switch (type) {
    case fetchCarActions.requestType:
    case fetchCarActions.successType:
    case fetchCarActions.failType:
      return {
        ...state,
        fetchState
      };
    default:
      return state;
  }
};

export default carSearchReducer;
