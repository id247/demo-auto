import React from 'react';
import PropTypes from 'prop-types';
import { fetchStatesPropType, formInputsPropType } from 'constants/propTypes';
import FetchError from 'components/FetchError';
import FiltersComponent from 'components/Filters';

class Filters extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  handleSubmit = formValues => {
    const { updateUrl } = this.props;
    updateUrl(formValues);
  };

  fetchData = () => {
    const { fetchFiltersAsync } = this.props;
    fetchFiltersAsync();
  };

  render() {
    const { filterInputs, fetchStates, queryParams } = this.props;

    if (fetchStates.isFetchingError) {
      return <FetchError fetchData={this.fetchData} />;
    }

    return (
      <FiltersComponent
        onSubmit={this.handleSubmit}
        fetchStates={fetchStates}
        filterInputs={filterInputs}
        queryParams={queryParams}
      />
    );
  }
}

Filters.propTypes = {
  filterInputs: formInputsPropType,
  fetchStates: fetchStatesPropType,
  queryParams: PropTypes.object.isRequired,
  fetchFiltersAsync: PropTypes.func.isRequired,
  updateUrl: PropTypes.func.isRequired
};

export default Filters;
