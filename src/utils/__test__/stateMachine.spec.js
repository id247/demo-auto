import fetchStates from 'constants/fetchStates';
import { getFetchStates, getNewStateMachineState } from '../stateMachine';

describe('getFetchStates', () => {
  const defaultStates = {
    isIdle: false,
    isFetching: false,
    isFetchingDone: false,
    isFetchingError: false
  };

  it('should return states object with isIdle true', () => {
    const expected = { ...defaultStates, isIdle: true };
    expect(getFetchStates(fetchStates.idle)).toEqual(expected);
  });

  it('should return states object with isFetching true', () => {
    const expected = { ...defaultStates, isFetching: true };
    expect(getFetchStates(fetchStates.fetching)).toEqual(expected);
  });

  it('should return states object with isFetchingDone true', () => {
    const expected = { ...defaultStates, isFetchingDone: true };
    expect(getFetchStates(fetchStates.done)).toEqual(expected);
  });

  it('should return states object with isFetchingError true', () => {
    const expected = { ...defaultStates, isFetchingError: true };
    expect(getFetchStates(fetchStates.error)).toEqual(expected);
  });
});

describe('getNewStateMachineState', () => {
  const actions = {
    requestType: 'requestType',
    successType: 'successType'
  };

  const stateMachine = {
    [fetchStates.idle]: {
      name: fetchStates.idle,
      to: {
        [actions.successType]: fetchStates.done
      }
    },
    [fetchStates.done]: {
      name: fetchStates.done,
      to: {
        [actions.requestType]: fetchStates.idle
      }
    }
  };

  it('should new possible state', () => {
    const state = fetchStates.idle;
    const expected = fetchStates.done;
    expect(
      getNewStateMachineState(stateMachine, state, actions.successType)
    ).toEqual(expected);
    expect(
      getNewStateMachineState(stateMachine, expected, actions.requestType)
    ).toEqual(state);
  });

  it('should return the same state of no possible transition specified', () => {
    const state = fetchStates.idle;
    expect(
      getNewStateMachineState(stateMachine, state, actions.requestType)
    ).toEqual(state);
  });

  it('should return the same state if no correct action', () => {
    const state = fetchStates.idle;
    expect(getNewStateMachineState(stateMachine, state, undefined)).toEqual(
      state
    );
  });
});
