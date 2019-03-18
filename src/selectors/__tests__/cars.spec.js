import * as selectors from '../cars';

let store;
beforeEach(() => {
  store = {
    cars: {
      '1': {
        id: 1
      }
    },
    favorites: {
      '1': true
    }
  };
});

describe('cars selectors', () => {
  it('carsSelector', () => {
    expect(selectors.carsSelector(store)).toEqual(store.cars);
  });

  it('propCarIdSelector', () => {
    expect(selectors.propCarIdSelector(store, { carId: 1 })).toEqual(1);
  });

  it('carByIdSelector with correct id', () => {
    expect(selectors.carByIdSelector(store, { carId: 1 })).toEqual(
      store.cars[1]
    );
  });

  it('carByIdSelector with incorrect id', () => {
    expect(selectors.carByIdSelector(store, { carId: 2 })).toBeUndefined();
  });

  it('isFavoriteSelector for favorite car should be true', () => {
    expect(selectors.isFavoriteSelector(store, { carId: 1 })).toBeTruthy();
  });

  it('isFavoriteSelector for not favorite car should be false', () => {
    expect(selectors.isFavoriteSelector(store, { carId: 2 })).toBeFalsy();
  });
});
