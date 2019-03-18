import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';

const createMyStore = (persistedState = {}) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reducers,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default createMyStore;
