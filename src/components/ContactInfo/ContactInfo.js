import {faEnvelope, faMapMarkedAlt, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const ContactInfoWrap = styled.ul``;

const ContactInfo = ({...props}) => {
  return (
    <ContactInfoWrap {...props}>
      <li>
        <p className="d-flex align-items-center">
          <FontAwesomeIcon className="mr-3" icon={faMapMarkedAlt} />
          76 Winn St, Woburn, MA 01801
        </p>
      </li>
      <li>
        <p className="d-flex align-items-center">
          <FontAwesomeIcon className="mr-3" icon={faPhone} />
          781-790-6462
        </p>
      </li>
      <li>
        <p className="d-flex align-items-center">
          <FontAwesomeIcon className="mr-3" icon={faEnvelope} />
          contact@example.com
        </p>
      </li>
    </ContactInfoWrap>
  );
};

export default ContactInfo;
