import { connect } from 'react-redux';
import {
  carSearchIdsSelector,
  carSearchTotalItemsSelector,
  carSearchFetchStatesSelector
} from './carSearchSelectors';
import { fetchCarsAsync } from './carSearchActions';
import CarSearch from './CarSearch';

export default connect(
  state => ({
    carIds: carSearchIdsSelector(state),
    totalItems: carSearchTotalItemsSelector(state),
    fetchStates: carSearchFetchStatesSelector(state)
  }),
  {
    fetchCarsAsync
  }
)(CarSearch);
