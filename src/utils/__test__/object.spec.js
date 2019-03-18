import { omit } from '../object';

describe('omit', () => {
  it('should remove item from object', () => {
    const object = {
      '1': true,
      '2': true
    };

    const expected = {
      '2': true
    };

    expect(omit(object, '1')).toEqual(expected);
  });

  it('should return same object if key dont exists', () => {
    const object = {
      '1': true,
      '2': true
    };

    expect(omit(object, '3')).toEqual(object);
  });
});
