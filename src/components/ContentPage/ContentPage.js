import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import PageTitle from '../shared/PageTitle';

const Wrap = styled.div`
  padding: 2vh 0 6vh;
`;

const ContentPage = ({children, preTitle, title, ...props}) => {
  return (
    <Wrap {...props}>
      {preTitle}
      <PageTitle>{title}</PageTitle>
      {children}
    </Wrap>
  );
};

ContentPage.propTypes = {
  children: PropTypes.any,
  preTitle: PropTypes.node,
  title: PropTypes.string
};

export default ContentPage;
