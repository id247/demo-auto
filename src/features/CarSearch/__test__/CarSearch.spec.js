import 'jest-dom/extend-expect';
import React from 'react';
import { cleanup, wait } from 'react-testing-library';
import axios from 'axios';
import { renderWithReduxAndRouter } from 'utils/tests';
import CarSearch from '../';

afterEach(() => {
  //eslint-disable-next-line no-console
  console.error = jest.fn();
  cleanup();
  axios.mockReset();
});

describe('CarSearch component', () => {
  const carBE = {
    color: 'red',
    fuelType: 'Diesel',
    manufacturerName: 'Mercedes-Benz',
    mileage: { number: 158099, unit: 'km' },
    unit: 'km',
    modelName: 'A-Klasse',
    pictureUrl: 'http://localhost/car.jpg',
    id: 10252,
    text: 'description'
  };
  const cars = [carBE];
  const totalItems = 1;

  const props = {
    queryString: '',
    queryParams: {},
    fetchStates: {
      isIdle: true,
      isFetching: false,
      isFetchingDone: false,
      isFetchingError: false
    },
    history: {
      push: jest.fn()
    }
  };

  test('Initial idle render', async () => {
    axios.mockImplementation(o => {
      let res = {};
      if (o.url.endsWith('/colors')) {
        res = { data: ['white'] };
      } else if (o.url.endsWith('/manufacturers')) {
        res = { data: [{ name: 'Mercedes' }] };
      } else {
        res = { data: cars, headers: { 'x-total-count': totalItems } };
      }
      return Promise.resolve(res);
    });

    const { container } = renderWithReduxAndRouter(<CarSearch {...props} />);

    expect(container).toMatchSnapshot();
  });

  test('Render after successful fetching ', async () => {
    axios.mockImplementation(o => {
      let res = {};
      if (o.url.endsWith('/colors')) {
        res = { data: ['white'] };
      } else if (o.url.endsWith('/manufacturers')) {
        res = { data: [{ name: 'Mercedes' }] };
      } else {
        res = { data: cars, headers: { 'x-total-count': totalItems } };
      }
      return Promise.resolve(res);
    });

    const { container, getByText } = renderWithReduxAndRouter(
      <CarSearch {...props} />
    );

    expect(axios).toHaveBeenCalledTimes(3);

    await wait(() => getByText('Mercedes-Benz A-Klasse'));

    expect(container).toMatchSnapshot();
  });

  test('Render after unsuccessful fetching', async () => {
    axios.mockImplementation(o => {
      let data = {};
      if (o.url.endsWith('/colors')) {
        data = { data: ['white'] };
      } else if (o.url.endsWith('/manufacturers')) {
        data = { data: [{ name: 'Mercedes' }] };
      } else {
        return Promise.reject();
      }
      return Promise.resolve({ data });
    });

    const { container, getByText } = renderWithReduxAndRouter(
      <CarSearch {...props} />
    );

    expect(axios).toHaveBeenCalledTimes(3);

    await wait(() => getByText('Something went wrong'));

    expect(container).toMatchSnapshot();
  });
});
