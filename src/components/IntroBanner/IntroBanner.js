import PropTypes from 'prop-types';
import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

import {mediaBreakpointUp} from '#root/helpers/responsive';

const IntroBannerInner = styled.div`
  height: 148px;
  position: relative;

  ${mediaBreakpointUp('lg')} {
    height: 270px;
  }

  img {
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
    z-index: 0;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
  }
`;

const IntroBannerWrap = styled.div``;

const IntroBanner = ({image, title, ...props}) => {
  return (
    <IntroBannerWrap {...props}>
      <Container>
        <IntroBannerInner>
          <img src={image} />
          <h1>{title}</h1>
        </IntroBannerInner>
      </Container>
    </IntroBannerWrap>
  );
};

IntroBanner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

export default IntroBanner;
