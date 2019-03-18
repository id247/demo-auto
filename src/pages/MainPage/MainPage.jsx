import React from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import CarSearch from 'features/CarSearch';

function MainPage({ location: { search }, history }) {
  const queryParams = qs.parse(search) || {};
  return (
    <Layout>
      <CarSearch
        queryString={search}
        queryParams={queryParams}
        history={history}
      />
    </Layout>
  );
}

MainPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.object.isRequired
};

export default MainPage;
