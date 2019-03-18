import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { baseURL, defaultHeaders } from 'api';
import { ADD_CARS } from 'actions/cars';

import { fetchCarsAsync, fetchCarsActions } from '../carSearchActions';
import apiRoutes from 'api/api-routes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const cars = [];
const totalItems = 0;

beforeEach(() => {
  //eslint-disable-next-line no-console
  console.error = jest.fn();
  axios.mockReset();
});

describe('fetchCarsAsync', () => {
  it('succesfuly fetches cars', () => {
    axios.mockResolvedValueOnce({
      headers: { 'x-total-count': totalItems },
      data: cars
    });

    const expectedActions = [
      { type: fetchCarsActions.requestType, payload: undefined },
      { type: ADD_CARS, payload: { cars: {} } },
      {
        type: fetchCarsActions.successType,
        payload: { carIds: [], totalItems }
      }
    ];

    const store = mockStore({ cars: {} });

    return store.dispatch(fetchCarsAsync({})).then(() => {
      expect(axios).toBeCalledWith({
        url: `${baseURL}${apiRoutes.cars}`,
        method: 'get',
        headers: { ...defaultHeaders },
        params: {
          _page: 1,
          _limit: 10
        }
      });

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fails fetching cars', () => {
    axios.mockRejectedValue('error');

    const expectedActions = [
      { type: fetchCarsActions.requestType, payload: undefined },
      {
        type: fetchCarsActions.failType,
        payload: undefined
      }
    ];

    const store = mockStore({ cars: {} });

    return store.dispatch(fetchCarsAsync({})).then(() => {
      expect(axios).toBeCalledWith({
        url: `${baseURL}${apiRoutes.cars}`,
        method: 'get',
        headers: { ...defaultHeaders },
        params: {
          _page: 1,
          _limit: 10
        }
      });

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
