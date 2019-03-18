import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import routes from 'constants/routes';
import { getFavorites, saveFavorites } from 'utils/localStorage';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import CarPage from 'pages/CarPage';
import createStore from 'store';
import history from './myHistory';

const persistedState = {
  favorites: getFavorites()
};

const store = createStore(persistedState);

store.subscribe(() => {
  saveFavorites(store.getState().favorites);
});

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path={routes.home} component={MainPage} />
          <Route path={`${routes.car}/:carId(\\d+)`} component={CarPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
