export const omit = (state, key) =>
  Object.keys(state).reduce((acc, k) => {
    if (k === `${key}`) {
      return acc;
    }
    acc[k] = state[k];
    return acc;
  }, {});
