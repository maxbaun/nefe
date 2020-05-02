import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin-bottom: 2em;
  text-align: center;

  img {
    max-width: 100%;
  }
`;
const LogoBanner = ({...props}) => {
  return (
    <Wrap {...props}>
      <img src="/img/logo.png" />
    </Wrap>
  );
};

export default LogoBanner;
