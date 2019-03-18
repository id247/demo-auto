import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import createStore from 'store';

export const testActionCreator = ({ type, fn }) => {
  describe(fn.name, () => {
    it('should return correct action', () => {
      expect(fn({})).toEqual({ type, payload: {} });
    });

    it('should return undefined payload if non was passed', () => {
      expect(fn()).toEqual({ type, payload: undefined });
    });
  });
};

export const renderWithReduxAndRouter = (
  ui,
  {
    initialState,
    store = createStore(initialState),
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>{ui}</Router>
    </Provider>
  ),
  store,
  history
});
