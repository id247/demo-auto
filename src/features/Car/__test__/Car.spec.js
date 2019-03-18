import 'jest-dom/extend-expect';
import React from 'react';
import { cleanup, wait } from 'react-testing-library';
import axios from 'axios';
import { renderWithReduxAndRouter } from 'utils/tests';
import Car from '../';

afterEach(() => {
  // eslint-disable-next-line no-console
  console.error = jest.fn();
  cleanup();
  axios.mockReset();
});

describe('Car component', () => {
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

  const props = {
    carId: 10252,
    fetchStates: {
      isIdle: true,
      isFetching: false,
      isFetchingDone: false,
      isFetchingError: false
    }
  };

  test('Initial idle render', async () => {
    axios.mockImplementation(o => {
      return Promise.resolve({ data: carBE });
    });

    const { container } = renderWithReduxAndRouter(<Car {...props} />);

    expect(container).toMatchSnapshot();
  });

  test('Render after successful fetching ', async () => {
    axios.mockImplementation(o => {
      return Promise.resolve({ data: carBE });
    });

    const { container, getByText } = renderWithReduxAndRouter(
      <Car {...props} />
    );

    expect(axios).toHaveBeenCalledTimes(1);

    await wait(() => getByText('Mercedes-Benz A-Klasse'));

    expect(container).toMatchSnapshot();
  });

  test('Render after unsuccessful fetching', async () => {
    axios.mockImplementation(o => {
      return Promise.reject();
    });

    const { container, getByText } = renderWithReduxAndRouter(
      <Car {...props} />
    );

    expect(axios).toHaveBeenCalledTimes(1);

    await wait(() => getByText('Something went wrong'));

    expect(container).toMatchSnapshot();
  });
});
