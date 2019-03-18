import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from 'components/Wrapper';

import './styles.scss';

function CarLayout({ carImage, carTitle, info, sidebar }) {
  return (
    <div className="car-layout">
      <div className="car-layout__image-wrapper">
        {carImage && (
          <img src={carImage} alt={carTitle} className="car-layout__image" />
        )}
      </div>
      <Wrapper size="m">
        <div className="car-layout__content">
          <div className="car-layout__info">{info}</div>
          <div className="car-layout__sidebar">{sidebar}</div>
        </div>
      </Wrapper>
    </div>
  );
}

CarLayout.propTypes = {
  sidebar: PropTypes.node.isRequired,
  info: PropTypes.node.isRequired,
  carImage: PropTypes.string,
  carTitle: PropTypes.string
};

export default CarLayout;
