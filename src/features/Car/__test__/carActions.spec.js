import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { adaptCar } from 'adapters/cars';
import { baseURL, defaultHeaders } from 'api';
import { ADD_CAR } from 'actions/cars';

import { fetchCarAsync, fetchCarActions } from '../carActions';
import apiRoutes from 'api/api-routes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const car = {
  color: 'red',
  fuelType: 'Diesel',
  manufacturerName: 'Mercedes-Benz',
  mileage: { number: 158099, unit: 'km' },
  number: 158099,
  unit: 'km',
  modelName: 'A-Klasse',
  pictureUrl: 'http://localhost/car.jpg',
  id: 10252
};

beforeEach(() => {
  // eslint-disable-next-line no-console
  console.error = jest.fn();
  axios.mockReset();
});

describe('fetchCarAsync', () => {
  it('succesfully fetches car by id', () => {
    const expectedActions = [
      { type: fetchCarActions.requestType, payload: undefined },
      { type: ADD_CAR, payload: { car: adaptCar(car) } },
      { type: fetchCarActions.successType, payload: undefined }
    ];

    axios.mockResolvedValueOnce({ data: car });
    const store = mockStore({ cars: {} });

    return store.dispatch(fetchCarAsync({ carId: 1 })).then(() => {
      expect(axios).toBeCalledWith({
        url: `${baseURL}${apiRoutes.cars}/1`,
        method: 'get',
        headers: { ...defaultHeaders }
      });

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('does nothing if no carId specified ', () => {
    const store = mockStore({ cars: {} });

    return store.dispatch(fetchCarAsync()).then(() => {
      expect(axios).not.toBeCalled();

      expect(store.getActions()).toEqual([]);
    });
  });
});
