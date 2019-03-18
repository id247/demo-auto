import fetchStates from 'constants/fetchStates';

export const getNewStateMachineState = (stateMachine, state, type) =>
  (stateMachine[state] &&
    stateMachine[state].to &&
    stateMachine[state].to[type]) ||
  state;

export const getFetchStates = fetchState => ({
  isIdle: fetchStates.idle === fetchState,
  isFetching: fetchStates.fetching === fetchState,
  isFetchingDone: fetchStates.done === fetchState,
  isFetchingError: fetchStates.error === fetchState
});
