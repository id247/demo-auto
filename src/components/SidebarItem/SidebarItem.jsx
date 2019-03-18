import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function SidebarItem({ children }) {
  return <div className="sidebar-item">{children}</div>;
}

SidebarItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default SidebarItem;
