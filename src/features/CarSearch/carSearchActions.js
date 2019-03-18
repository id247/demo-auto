import apiRequest from 'api';
import apiRoutes from 'api/api-routes';
import { adaptCars, adaptCarIds } from 'adapters/cars';
import { addCars } from 'actions/cars';
import createFetchActions from 'utils/createFetchActions';
import handleError from 'utils/handleError';
import { defaultPerPage } from 'constants/pagination';

const prefix = 'carSearch/';

export const fetchCarsActions = createFetchActions(prefix, 'FETCH_CARS');

const paramsMap = {
  page: { key: '_page', default: 1 },
  limit: { key: '_limit', default: defaultPerPage }
};

const defaultParams = Object.values(paramsMap).reduce((acc, v) => {
  acc[v.key] = v.default;
  return acc;
}, {});

export const fetchCarsAsync = ({ queryParams = {} }) => async dispatch => {
  dispatch(fetchCarsActions.fetch());
  try {
    const fullQueryParams = Object.keys(queryParams).reduce((acc, k) => {
      if (paramsMap[k]) {
        acc[paramsMap[k].key] = queryParams[k];
      } else {
        acc[k] = queryParams[k];
      }

      return acc;
    }, defaultParams);

    const res = await apiRequest(apiRoutes.cars, {
      params: fullQueryParams
    });

    const { totalItems, items: cars } = res;

    if (totalItems > 0 && cars.length === 0) {
      const error = new Error('No cars found');
      error.response = {
        status: 404
      };
      throw error;
    }

    dispatch(addCars({ cars: adaptCars(cars) }));
    dispatch(
      fetchCarsActions.success({ carIds: adaptCarIds(cars), totalItems })
    );
  } catch (e) {
    dispatch(fetchCarsActions.fail());
    handleError(e);
  }
};
