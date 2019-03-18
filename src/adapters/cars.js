export const adaptCar = ({
  id,
  color,
  fuelType,
  manufacturerName,
  mileage: { number, unit } = {
    number: 0,
    unit: ''
  },
  modelName,
  pictureUrl,
  pictureThumb,
  text = ''
}) => ({
  id,
  color,
  fuelType,
  manufacturerName,
  mileage: `${number} ${unit}`,
  modelName,
  pictureUrl,
  pictureThumb,
  title: `${manufacturerName} ${modelName}`,
  text
});

export const adaptCars = (cars = []) =>
  cars.reduce((acc, c) => {
    acc[c.id] = adaptCar(c);
    return acc;
  }, {});

export const adaptCarIds = (cars = []) => cars.map(c => c.id);
