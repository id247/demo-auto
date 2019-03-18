import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
import Menu from 'components/Menu';
import './styles.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/" className="header__home-link">
            <Logo />
          </Link>
        </div>
        <div className="header__menu">
          <Menu />
        </div>
      </div>
    </header>
  );
}

export default Header;
