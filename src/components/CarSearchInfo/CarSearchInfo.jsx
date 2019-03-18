import React from 'react';
import PropTypes from 'prop-types';
import { fetchStatesPropType, formInputsPropType } from 'constants/propTypes';
import Form from 'components/Form';
import Idle from 'components/Idle';
import './styles.scss';

function CarSearchInfo({
  sortByOptions,
  onSortChange,
  initialSorting,
  totalItems,
  itemsToDisplay,
  fetchStates
}) {
  return (
    <div className="car-search-info">
      <div className="car-search-info__content">
        <div className="car-search-info__title">Available cars</div>
        <div className="car-search-info__results">
          {fetchStates.isIdle ? (
            <Idle style={{ width: '100px' }} />
          ) : (
            `Showing ${itemsToDisplay} of ${totalItems} results`
          )}
        </div>
      </div>
      <div className="car-search-info__sort">
        <Form
          onSubmit={onSortChange}
          inputs={sortByOptions}
          initialValues={initialSorting}
          submitOnChange
        />
      </div>
    </div>
  );
}

CarSearchInfo.propTypes = {
  sortByOptions: formInputsPropType,
  onSortChange: PropTypes.func.isRequired,
  initialSorting: PropTypes.object.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsToDisplay: PropTypes.number.isRequired,
  fetchStates: fetchStatesPropType
};

export default CarSearchInfo;
