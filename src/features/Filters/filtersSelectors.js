import { createSelector } from 'reselect';
import filters from 'constants/filters';
import { characteristicsSelector } from 'selectors/characteristics';
import { getFetchStates } from 'utils/stateMachine';

const filtersSelector = state => state.filters;

export const filtersItemsSelector = createSelector(
  filtersSelector,
  filters => filters.items
);

export const filtersInputsSelector = createSelector(
  filtersItemsSelector,
  characteristicsSelector,
  (filterItems, characteristics) =>
    filterItems.map(f => ({
      ...filters[f],
      options: [
        filters[f].emptyOption,
        ...(characteristics[f]
          ? characteristics[f].map(c => ({
              title: c,
              value: c
            }))
          : [])
      ]
    }))
);

export const filtersFetchStatesSelector = createSelector(
  filtersSelector,
  filters => getFetchStates(filters.fetchState)
);
