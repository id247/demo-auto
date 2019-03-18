export const favoritesItem = 'favorites';

export const saveFavorites = vaforites => {
  try {
    const favorites = JSON.stringify(vaforites);
    localStorage.setItem(favoritesItem, favorites);
  } catch (e) {
    console.log(e);
  }
};

export const getFavorites = () => {
  try {
    const favorites = localStorage.getItem(favoritesItem);

    if (!favorites) {
      return {};
    }

    return JSON.parse(favorites);
  } catch (e) {
    console.log(e);
    return {};
  }
};
