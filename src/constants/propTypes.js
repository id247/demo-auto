import PropTypes from 'prop-types';

export const carPropType = PropTypes.shape({
  id: PropTypes.number,
  color: PropTypes.string,
  fuelType: PropTypes.string,
  manufacturerName: PropTypes.string,
  mileage: PropTypes.string,
  modelName: PropTypes.string,
  pictureUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
});

export const fetchStatesPropType = PropTypes.shape({
  isIdle: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchingDone: PropTypes.bool.isRequired,
  isFetchingError: PropTypes.bool.isRequired
});

export const selectOptionPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isEmpty: PropTypes.bool
});

export const selectOptionsPropType = PropTypes.arrayOf(selectOptionPropType);

export const formInputsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    emptyOption: selectOptionPropType,
    options: selectOptionsPropType
  })
).isRequired;
