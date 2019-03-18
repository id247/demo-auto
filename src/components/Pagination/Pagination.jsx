import React from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import PaginationLink from './PaginationLink';
import { defaultPerPage } from 'constants/pagination';
import './styles.scss';

const getPageLinkCurried = queryParams => page => {
  const link = qs.stringify({ ...queryParams, page });

  return link ? `?${link}` : '';
};

function Pagination({ queryParams, currentPage = 1, totalItems }) {
  const getPageLink = getPageLinkCurried(queryParams);

  const totalPages = Math.floor(totalItems / defaultPerPage);

  if (currentPage > totalPages) {
    currentPage = 1;
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const prevPage = currentPage > 2 ? currentPage - 1 : undefined;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

  return (
    <div className="pagination">
      <div className="pagination__item">
        <PaginationLink to={getPageLink()} disabled={isFirstPage}>
          First
        </PaginationLink>
      </div>
      <div className="pagination__item">
        <PaginationLink to={getPageLink(prevPage)} disabled={isFirstPage}>
          Previous
        </PaginationLink>
      </div>
      <div className="pagination__item">
        Page {currentPage} of {totalPages}
      </div>
      <div className="pagination__item">
        <PaginationLink to={getPageLink(nextPage)} disabled={isLastPage}>
          Next
        </PaginationLink>
      </div>
      <div className="pagination__item">
        <PaginationLink to={getPageLink(totalPages)} disabled={isLastPage}>
          Last
        </PaginationLink>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  queryParams: PropTypes.object.isRequired,
  currentPage: PropTypes.number,
  totalItems: PropTypes.number
};

export default Pagination;
