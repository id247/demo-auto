import { createSelector } from 'reselect';
import { carsSelector } from 'selectors/cars';
import { getFetchStates } from 'utils/stateMachine';

export const carSearchSelector = state => state.carSearch;

export const carSearchIdsSelector = createSelector(
  carSearchSelector,
  carSearch => carSearch.ids
);

export const carSearchCarsSelector = createSelector(
  carsSelector,
  carSearchIdsSelector,
  (cars, carIds) => carIds.map(c => cars[c])
);

export const carSearchTotalItemsSelector = createSelector(
  carSearchSelector,
  carSearch => carSearch.totalItems
);

export const carSearchFetchStatesSelector = createSelector(
  carSearchSelector,
  carSearch => getFetchStates(carSearch.fetchState)
);
