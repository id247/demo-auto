import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import CarDescription from '../';

afterEach(cleanup);

describe('CarDescription component', () => {
  const carFE = {
    id: 10252,
    color: 'red',
    fuelType: 'Diesel',
    manufacturerName: 'Mercedes-Benz',
    mileage: '158099 km',
    modelName: 'A-Klasse',
    pictureUrl: 'http://localhost/car.jpg',
    title: 'Mercedes-Benz A-Klasse',
    text: 'description'
  };

  test('Renders with idle state', async () => {
    const fetchStates = {
      isIdle: true,
      isFetching: false,
      isFetchingDone: false,
      isFetchingError: false
    };
    const { container } = render(
      <CarDescription car={{}} fetchStates={fetchStates} />
    );

    const idleElements = container.querySelectorAll('.idle');
    expect(idleElements.length).toBe(3);
  });

  test('Renders with fetched data', async () => {
    const fetchStates = {
      isIdle: false,
      isFetching: false,
      isFetchingDone: true,
      isFetchingError: false
    };
    const { container } = render(
      <CarDescription car={carFE} fetchStates={fetchStates} />
    );

    const title = container.querySelector('.car-description__title');
    const text = container.querySelector('.car-description__text');
    expect(title).toHaveTextContent(carFE.title);
    expect(text).toHaveTextContent(carFE.text);
  });

  test('Renders with no car text', async () => {
    const fetchStates = {
      isIdle: false,
      isFetching: false,
      isFetchingDone: true,
      isFetchingError: false
    };
    const car = {
      ...carFE,
      text: ''
    };
    const { container } = render(
      <CarDescription car={car} fetchStates={fetchStates} />
    );

    const title = container.querySelector('.car-description__title');
    const text = container.querySelector('.car-description__text');
    expect(title).toHaveTextContent(carFE.title);
    expect(text).toBeFalsy();
  });
});
