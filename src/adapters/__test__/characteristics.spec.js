import {
  adaptColors,
  adaptManufacturer,
  adaptManufacturers
} from '../characteristics';

describe('adaptColors', () => {
  it('should return empty array of no response from be', () => {
    expect(adaptColors()).toEqual([]);
  });

  it('should adapt colors from BE response', () => {
    const colorsBE = ['white', 'black'];
    expect(adaptColors(colorsBE)).toEqual(colorsBE);
  });
});

describe('adaptManufacturer', () => {
  it('should adapt adaptManufacturer from BE response', () => {
    const manufacturerBE = {
      name: 'Mercedes-Benz'
    };
    const manufacturerFE = 'Mercedes-Benz';
    expect(adaptManufacturer(manufacturerBE)).toEqual(manufacturerFE);
  });
});

describe('adaptManufacturers', () => {
  it('should return empty array of no response from be', () => {
    expect(adaptManufacturers()).toEqual([]);
  });

  it('should adapt colors from BE response', () => {
    const manufacturersBE = [
      {
        name: 'Mercedes-Benz'
      },
      {
        name: 'Audi'
      }
    ];
    const manufacturersFE = ['Mercedes-Benz', 'Audi'];
    expect(adaptManufacturers(manufacturersBE)).toEqual(manufacturersFE);
  });
});
