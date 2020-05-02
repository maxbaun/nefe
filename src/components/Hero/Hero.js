import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeroWrap = styled.div`
  img {
    max-height: 50vh;
    object-fit: cover;
    width: 100%;
  }
`;

const Hero = ({image, ...props}) => {
  return (
    <HeroWrap {...props}>
      <img src={image} />
    </HeroWrap>
  );
};

Hero.propTypes = {
  image: PropTypes.string
};

export default Hero;
