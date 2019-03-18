import { connect } from 'react-redux';
import { fetchFiltersAsync } from './filtersActions';
import {
  filtersInputsSelector,
  filtersFetchStatesSelector
} from './filtersSelectors';
import Filters from './Filters';

export default connect(
  state => ({
    filterInputs: filtersInputsSelector(state),
    fetchStates: filtersFetchStatesSelector(state)
  }),
  {
    fetchFiltersAsync
  }
)(Filters);
