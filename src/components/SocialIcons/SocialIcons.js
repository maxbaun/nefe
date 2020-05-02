import {faFacebook, faFacebookSquare, faTwitter, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const SocialIconsWrap = styled.ul``;

const SocialIcons = ({...props}) => {
  return (
    <SocialIconsWrap {...props}>
      <li className="list-inline-item">
        <a className="p-2 text-primary" href="https://www.facebook.com/NewEnglandFirearmsAcademy">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>
      </li>
      <li className="list-inline-item">
        <a className="p-2 text-primary" href="https://twitter.com/NEFirearmsAcad">
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </a>
      </li>
    </SocialIconsWrap>
  );
};

export default SocialIcons;
