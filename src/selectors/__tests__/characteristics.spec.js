import * as selectors from '../characteristics';

let store;
beforeEach(() => {
  store = {
    characteristics: {
      colors: []
    }
  };
});

describe('characteristics selectors', () => {
  it('characteristicsSelector', () => {
    expect(selectors.characteristicsSelector(store)).toEqual(
      store.characteristics
    );
  });
});
