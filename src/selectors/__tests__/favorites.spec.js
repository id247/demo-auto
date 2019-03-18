import * as selectors from '../favorites';

let store;
beforeEach(() => {
  store = {
    favorites: {
      '1': true
    }
  };
});

describe('favorites selectors', () => {
  it('favoritesSelector', () => {
    expect(selectors.favoritesSelector(store)).toEqual(store.favorites);
  });
});
