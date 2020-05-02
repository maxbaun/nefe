import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

import ContactForm from '#root/components/ContactForm';
import ContactSection from '#root/components/ContactSection';
import ContentPage from '#root/components/ContentPage';
import Layout from '#root/components/Layout';
import PageTitle from '#root/components/shared/PageTitle';

const Map = styled.div`
  iframe {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    width: 100%;
  }
`;

const ContactPageWrap = styled.div`
  background-color: ${props => props.theme.whiteSmoke};
`;

const ContactPage = () => {
  return (
    <Layout>
      <ContactPageWrap>
        <ContactSection title={<PageTitle className="mt-2 mb-4">Contact Us</PageTitle>} />
        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.4409068171376!2d-71.15776338419725!3d42.48217827917887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e375a810f93867%3A0x8ddf9fc71f66c568!2sNew%20England%20Firearms%20Academy!5e0!3m2!1sen!2sus!4v1587245441483!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{border: 'none', width: '100%'}}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Map>
      </ContactPageWrap>
    </Layout>
  );
};

export default ContactPage;
