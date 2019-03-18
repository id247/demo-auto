import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function SidebarButton({ children }) {
  return <div className="sidebar-button">{children}</div>;
}

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default SidebarButton;
