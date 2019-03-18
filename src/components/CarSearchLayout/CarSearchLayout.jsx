import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from 'components/Wrapper';
import './styles.scss';

function CarSearchLayout({ sidebar, info, children }) {
  return (
    <Wrapper>
      <div className="car-search-layout">
        <div className="car-search-layout__sidebar">{sidebar}</div>
        <div className="car-search-layout__content">
          <div className="car-search-layout__info">{info}</div>
          <div className="car-search-layout__list">{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}

CarSearchLayout.propTypes = {
  sidebar: PropTypes.node.isRequired,
  info: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default CarSearchLayout;
