import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
import Text from 'components/Text';
import './styles.scss';

function Header() {
  return (
    <div className="not-found">
      <div className="not-found__logo">
        <Logo />
      </div>
      <div className="not-found__title">404 - Not Found</div>
      <div className="not-found__text">
        <Text>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>
            You can always go back to the <Link to="/">homepage</Link>.
          </p>
        </Text>
      </div>
    </div>
  );
}

export default Header;
