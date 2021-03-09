import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout as LayoutWrapper } from 'antd';
// import useWindowSize from '../../library/hooks/useWindowSize';
import LayoutProvider from '../../context/LayoutProvider';
import {
  LISTING_POSTS_PAGE,
  LOGIN_PAGE,
} from '../../settings/constant';
import Header from './Header/Header';
const { Content } = LayoutWrapper;

export default withRouter(function Layout({ children, location }) {
  // const { width } = useWindowSize();

  return (
    <LayoutProvider>
      {location.pathname === LOGIN_PAGE ? (
        <Content>{children}</Content>
      ) : (
        <Fragment>
          <Header />
          <Content>{children}</Content>
          {location.pathname === LISTING_POSTS_PAGE ? (
            <div style={{ height: '33px' }} />
          ) : (
            <Fragment>
            </Fragment>
          )}
        </Fragment>
      )}
    </LayoutProvider>
  );
});
