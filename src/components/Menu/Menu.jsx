import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Header({ children }) {
  return (
    <ul className="menu">
      <li className="menu__item">
        <Link to="/nopage" className="menu__link">
          Purchase
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/nopage" className="menu__link">
          My Orders
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/nopage" className="menu__link">
          Sell
        </Link>
      </li>
    </ul>
  );
}

export default Header;
