import * as selectors from '../carSearchSelectors';
import { getFetchStates } from 'utils/stateMachine';
import fetchStates from 'constants/fetchStates';

let store;
beforeEach(() => {
  store = {
    carSearch: {
      ids: [1],
      totalItems: 10,
      fetchState: fetchStates.idle
    },
    cars: {
      '1': {
        id: 1
      }
    }
  };
});

describe('carSearchSelectors', () => {
  it('carSearchSelector', () => {
    expect(selectors.carSearchSelector(store)).toEqual(store.carSearch);
  });

  it('carSearchIdsSelector', () => {
    expect(selectors.carSearchIdsSelector(store)).toEqual(store.carSearch.ids);
  });

  it('carSearchTotalItemsSelector', () => {
    expect(selectors.carSearchTotalItemsSelector(store)).toEqual(
      store.carSearch.totalItems
    );
  });

  it('carSearchFetchStatesSelector', () => {
    expect(selectors.carSearchFetchStatesSelector(store)).toEqual(
      getFetchStates(store.carSearch.fetchState)
    );
  });

  it('carSearchCarsSelector', () => {
    expect(selectors.carSearchCarsSelector(store)).toEqual([{ id: 1 }]);
  });
});
