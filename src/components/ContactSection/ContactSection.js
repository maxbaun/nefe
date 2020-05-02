import PropTypes from 'prop-types';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import styled from 'styled-components';

import ContactForm from '../ContactForm';
import ContactInfo from '../ContactInfo';
import SocialIcons from '../SocialIcons';

const Wrap = styled.div`
  background-color: ${props => props.theme.whiteSmoke};
  padding: 40px 0px 40px 0px;
`;
const ContactSection = ({title, ...props}) => {
  return (
    <Wrap {...props}>
      <Container>
        {title ? title : <h3 className="text-center mb-4">Contact Us</h3>}
        <Row>
          <Col md="8">
            <ContactForm />
          </Col>
          <Col md="4">
            <ContactInfo className="text-lg-left list-unstyled ml-4" />
            <hr className="hr-light my-4" />
            <SocialIcons className="list-inline list-unstyled" />
          </Col>
        </Row>
      </Container>
    </Wrap>
  );
};

ContactSection.propTypes = {
  title: PropTypes.any
};

export default ContactSection;
