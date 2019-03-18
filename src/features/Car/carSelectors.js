import { createSelector } from 'reselect';
import { getFetchStates } from 'utils/stateMachine';

const carSelector = state => state.car;

export const carFetchStatesSelector = createSelector(
  carSelector,
  car => getFetchStates(car.fetchState)
);
