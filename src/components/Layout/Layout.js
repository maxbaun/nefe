import PropTypes from 'prop-types';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';

import {mediaBreakpointUp} from '#root/helpers/responsive';

import Footer from './Footer';
import Header from './Header';
import theme from './theme';

const PageContent = styled.div``;

const LayoutFooter = styled(Footer)``;

const LayoutWrap = styled.div`
  min-height: 100vh;
  padding-bottom: 100px;
  position: relative;

  ${mediaBreakpointUp('md')} {
    padding-bottom: 70px;
  }

  ${LayoutFooter} {
    bottom: 0;
    height: 100px;
    left: 0;
    position: absolute;
    width: 100%;

    ${mediaBreakpointUp('md')} {
      height: 70px;
    }
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
