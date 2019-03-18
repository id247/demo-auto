import React from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';
import { fetchStatesPropType } from 'constants/propTypes';
import FetchError from 'components/FetchError';
import CarSearchLayout from 'components/CarSearchLayout';
import CarSearchInfo from 'features/CarSearchInfo';
import Pagination from 'components/Pagination';
import CarList from 'components/CarList';
import CarListItem from 'features/CarListItem';
import Filters from 'features/Filters';
import { omit } from 'utils/object';

class CarSearch extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { queryString, fetchStates } = this.props;
    if (prevProps.queryString !== queryString) {
      this.fetchData();
    }

    if (fetchStates.isFetchingDone && prevProps.fetchStates.isFetching) {
      // TODO add smoth scloll
      window && window.scroll(0, 0);
    }
  }

  fetchData = () => {
    const { queryParams, fetchCarsAsync } = this.props;

    fetchCarsAsync({ queryParams });
  };

  updateUrl = newParams => {
    const { history, queryParams } = this.props;
    const newQueryParams = {
      ...omit(queryParams, 'page'),
      ...newParams
    };
    history.push(`?${qs.stringify(newQueryParams)}`);
  };

  render() {
    const { carIds, fetchStates, totalItems, queryParams = {} } = this.props;

    return (
      <CarSearchLayout
        sidebar={
          <Filters updateUrl={this.updateUrl} queryParams={queryParams} />
        }
        info={
          <CarSearchInfo
            fetchStates={fetchStates}
            updateUrl={this.updateUrl}
            queryParams={queryParams}
            itemsToDisplay={carIds.length}
            totalItems={totalItems}
          />
        }
      >
        {fetchStates.isFetchingError ? (
          <FetchError fetchData={this.fetchData} />
        ) : (
          <CarList
            carIds={carIds}
            fetchStates={fetchStates}
            renderCarListItem={({ carId }) => (
              <CarListItem carId={carId} isIdle={fetchStates.isIdle} />
            )}
            pagination={
              <Pagination
                queryParams={queryParams}
                currentPage={parseInt(queryParams.page, 10) || 1}
                totalItems={totalItems}
              />
            }
          />
        )}
      </CarSearchLayout>
    );
  }
}

CarSearch.propTypes = {
  queryString: PropTypes.string.isRequired,
  queryParams: PropTypes.object.isRequired,
  fetchStates: fetchStatesPropType,
  history: PropTypes.object.isRequired,
  carIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  fetchCarsAsync: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default CarSearch;
