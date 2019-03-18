import { adaptCar, adaptCars, adaptCarIds } from '../cars';

const carBE = {
  color: 'red',
  fuelType: 'Diesel',
  manufacturerName: 'Mercedes-Benz',
  mileage: { number: 158099, unit: 'km' },
  unit: 'km',
  modelName: 'A-Klasse',
  pictureUrl: 'http://localhost/car.jpg',
  pictureThumb: 'http://localhost/car.jpg',
  id: 10252,
  text: 'description'
};

const carFE = {
  id: 10252,
  color: 'red',
  fuelType: 'Diesel',
  manufacturerName: 'Mercedes-Benz',
  mileage: '158099 km',
  modelName: 'A-Klasse',
  pictureUrl: 'http://localhost/car.jpg',
  pictureThumb: 'http://localhost/car.jpg',
  title: 'Mercedes-Benz A-Klasse',
  text: 'description'
};

describe('adaptCar', () => {
  it('should adapt car from BE response', () => {
    expect(adaptCar(carBE)).toEqual(carFE);
  });
});

describe('adaptCars', () => {
  it('should return empty object of no response from be', () => {
    expect(adaptCars()).toEqual({});
  });

  it('should adapt cars from BE response', () => {
    const secondCarId = 12345;
    const carsBE = [{ ...carBE }, { ...carBE, id: secondCarId }];
    const expected = {
      [carBE.id]: { ...carFE },
      [secondCarId]: { ...carFE, id: secondCarId }
    };
    expect(adaptCars(carsBE)).toEqual(expected);
  });
});

describe('adaptCarIds', () => {
  it('should return empty array of no response from be', () => {
    expect(adaptCarIds()).toEqual([]);
  });

  it('should adapt cars ids from BE response', () => {
    const secondCarId = 12345;
    const carsBE = [{ ...carBE }, { ...carBE, id: secondCarId }];
    const expected = [carBE.id, secondCarId];
    expect(adaptCarIds(carsBE)).toEqual(expected);
  });
});
