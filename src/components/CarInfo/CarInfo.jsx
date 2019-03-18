import { carPropType } from 'constants/propTypes';

function CarInfo({ car = {} }) {
  return [car.id && `Stock # ${car.id}`, car.mileage, car.fuelType, car.color]
    .filter(Boolean)
    .join(' - ');
}

CarInfo.propTypes = {
  car: carPropType
};

export default CarInfo;
