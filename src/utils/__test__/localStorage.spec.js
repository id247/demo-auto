import { favoritesItem, saveFavorites, getFavorites } from '../localStorage';

beforeEach(() => {
  const localStorageMock = (function() {
    let store = {};

    return {
      getItem(key) {
        return store[key] || null;
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      }
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
  });
});

describe('localStorage', () => {
  it('should add favorites to the storage and then get tthem', () => {
    const favorites = {
      '1': true,
      '2': true,
      '3': true
    };

    saveFavorites(favorites);
    const savedFavorites = getFavorites();

    expect(window.localStorage.getItem(favoritesItem)).toEqual(
      JSON.stringify(favorites)
    );
    expect(savedFavorites).toEqual(favorites);
  });
});
