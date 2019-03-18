import React from 'react';
import { Link } from 'react-router-dom';

function PaginationLink({ to, disabled, children }) {
  if (disabled) {
    return children;
  }

  return (
    <Link to={to} className="pagination__link">
      {children}
    </Link>
  );
}

export default PaginationLink;
