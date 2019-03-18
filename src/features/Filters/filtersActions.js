import apiRequest from 'api';
import apiRoutes from 'api/api-routes';
import { adaptColors, adaptManufacturers } from 'adapters/characteristics';
import { addCharaceristic } from 'actions/characteristics';
import createFetchActions from 'utils/createFetchActions';
import characteristics from 'constants/characteristics';

const prefix = 'filters/';

export const fetchFiltersActions = createFetchActions(prefix, 'FETCH_FILTERS');

export const fetchFiltersAsync = () => async dispatch => {
  dispatch(fetchFiltersActions.fetch());

  try {
    const [colors, manufacturers] = await Promise.all([
      apiRequest(apiRoutes.colors),
      apiRequest(apiRoutes.manufacturers)
    ]);

    dispatch(
      addCharaceristic({
        name: characteristics.colors,
        items: adaptColors(colors)
      })
    );
    dispatch(
      addCharaceristic({
        name: characteristics.manufacturers,
        items: adaptManufacturers(manufacturers)
      })
    );
    const filters = [characteristics.colors, characteristics.manufacturers];
    dispatch(fetchFiltersActions.success({ filters }));
  } catch (e) {
    //eslint-disable-next-line no-console
    console.error(e);
    dispatch(fetchFiltersActions.fail());
  }
};
