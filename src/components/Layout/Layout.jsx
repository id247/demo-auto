import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '../Header';
import Wrapper from '../Wrapper';
import Footer from '../Footer';
import './styles.scss';

function Layout({ children, isCentered }) {
  return (
    <div className="layout">
      <div className="layout__header">
        <Wrapper>
          <Header />
        </Wrapper>
      </div>
      <div
        className={classNames('layout__content', {
          'layout__content--centered': isCentered
        })}
      >
        {children}
      </div>
      <div className="layout__footer">
        <Wrapper>
          <Footer />
        </Wrapper>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isCentered: PropTypes.bool
};

export default Layout;
