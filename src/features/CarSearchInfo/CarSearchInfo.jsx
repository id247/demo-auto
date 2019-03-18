import React from 'react';
import PropTypes from 'prop-types';
import { fetchStatesPropType } from 'constants/propTypes';
import CarSearchInfoComponent from 'components/CarSearchInfo';
import { inputTypes } from 'constants/forms';

const sortKeyName = 'sort';

const sortByOptions = [
  {
    label: 'Sort By',
    name: sortKeyName,
    type: inputTypes.select,
    options: [
      {
        title: 'None',
        value: ''
      },
      {
        title: 'Mileage - Ascending',
        value: 'asc'
      },
      {
        title: 'Mileage - Descending',
        value: 'desc'
      }
    ]
  }
];

class CarSearchInfo extends React.Component {
  handleSortChange = formValues => {
    const { updateUrl } = this.props;
    updateUrl(formValues);
  };

  render() {
    const { queryParams, fetchStates, itemsToDisplay, totalItems } = this.props;

    return (
      <CarSearchInfoComponent
        fetchStates={fetchStates}
        itemsToDisplay={itemsToDisplay}
        totalItems={totalItems}
        onSortChange={this.handleSortChange}
        sortByOptions={sortByOptions}
        queryParams={queryParams}
        initialSorting={{ [sortKeyName]: queryParams[sortKeyName] || '' }}
      />
    );
  }
}

CarSearchInfo.propTypes = {
  queryParams: PropTypes.object.isRequired,
  fetchStates: fetchStatesPropType,
  itemsToDisplay: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default CarSearchInfo;
