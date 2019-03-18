import { connect } from 'react-redux';
import { carByIdSelector, isFavoriteSelector } from 'selectors/cars';
import CarListItemComponent from 'components/CarListItem';

export default connect(
  (state, ownProps) => ({
    car: carByIdSelector(state, ownProps),
    isFavorite: isFavoriteSelector(state, ownProps)
  }),
  {}
)(CarListItemComponent);
