import PropTypes from 'prop-types';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import theme from './theme';

const PageContent = styled.div``;

const LayoutFooter = styled(Footer)``;

const LayoutWrap = styled.div`
  min-height: 100vh;
  padding-bottom: 70px;
  position: relative;

  ${LayoutFooter} {
    bottom: 0;
    height: 70px;

    left: 0;
    position: absolute;
    width: 100%;
  }
`;

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrap>
        <Header />
        <PageContent>{children}</PageContent>
        <LayoutFooter />
      </LayoutWrap>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
