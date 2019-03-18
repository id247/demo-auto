import apiRequest from 'api';
import apiRoutes from 'api/api-routes';
import { adaptCar } from 'adapters/cars';
import { addCar } from 'actions/cars';
import createFetchActions from 'utils/createFetchActions';
import handleError from 'utils/handleError';

const prefix = 'car/';

export const fetchCarActions = createFetchActions(prefix, 'FETCH_CAR');

export const fetchCarAsync = ({ carId } = {}) => async dispatch => {
  if (!carId) {
    return;
  }

  dispatch(fetchCarActions.fetch());

  try {
    const car = await apiRequest(`${apiRoutes.cars}/${carId}`);
    dispatch(addCar({ car: adaptCar(car) }));
    dispatch(fetchCarActions.success());
  } catch (e) {
    dispatch(fetchCarActions.fail());
    handleError(e);
  }
};
