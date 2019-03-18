import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import CarInfo from '../';

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

  test('Renders with no car', async () => {
    const { container } = render(<CarInfo car={carFE} />);

    expect(container).toHaveTextContent('');
  });

  test('Renders with car', async () => {
    const { container } = render(<CarInfo car={carFE} />);

    expect(container).toHaveTextContent(
      `Stock # ${carFE.id} - ${carFE.mileage} - ${carFE.fuelType} - ${
        carFE.color
      }`
    );
  });

  test('Renders with car without color', async () => {
    const car = {
      ...carFE,
      color: ''
    };
    const { container } = render(<CarInfo car={car} />);

    expect(container).toHaveTextContent(
      `Stock # ${carFE.id} - ${carFE.mileage} - ${carFE.fuelType}`
    );
  });
});
