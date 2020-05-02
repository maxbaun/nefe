import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  align-items: center;
  display: flex;
  background-color: #111111;
  color: #a3a3a3;
`;

const Footer = ({...props}) => {
  return (
    <FooterWrap {...props}>
      <Container>
        <div className="py-3 text-light">
          <Row>
            <Col md="4">
              <a href="tel:1234556789" className="text-white-50">
                <FontAwesomeIcon className="mr-1" icon={faPhoneAlt} size="xs" />
                781-790-6462
              </a>
            </Col>
            <Col md="8" className="ml-auto">
              <p className="m-0 text-md-right text-white-50">© New England Firearms Academy | All Rights Reserved</p>
            </Col>
          </Row>
        </div>
      </Container>
    </FooterWrap>
  );
};

Footer.propTypes = {};

export default Footer;
