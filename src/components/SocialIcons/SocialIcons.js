import {faFacebookSquare, faInstagramSquare, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const SocialIconsWrap = styled.ul``;

const SocialIcons = ({...props}) => {
  return (
    <SocialIconsWrap {...props}>
      <li className="list-inline-item">
        <a className="p-2 text-primary" href="https://www.facebook.com/NewEnglandFirearmsAcademy" target="__blank">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>
      </li>
      <li className="list-inline-item">
        <a className="p-2 text-primary" href="https://twitter.com/NEFirearmsAcad" target="__blank">
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </a>
      </li>
      <li className="list-inline-item">
        <a className="p-2 text-primary" href="https://www.instagram.com/newenglandfirearmsacademy/" target="__blank">
          <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
        </a>
      </li>
    </SocialIconsWrap>
  );
};

export default SocialIcons;
