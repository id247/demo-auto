import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import Car from 'features/Car';

function CarPage({
  match: {
    params: { carId }
  }
}) {
  return (
    <Layout>
      <Car carId={parseInt(carId, 10)} />
    </Layout>
  );
}

CarPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      carId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CarPage;
