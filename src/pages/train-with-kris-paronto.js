import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

import ContentPage from '#root/components/ContentPage';
import Hero from '#root/components/Hero';
import Layout from '#root/components/Layout';
import {ButtonPrimary} from '#root/components/shared/Button';
import {mediaBreakpointUp} from '#root/helpers/responsive';

const PageHero = styled(Hero)`
  background-color: #000;
  text-align: center;
  img {
    object-fit: cover;
    object-position: center 20%;
    margin: 0 auto;

    ${mediaBreakpointUp('lg')} {
      max-width: 75%;
    }
  }
`;

const KrisParontoPage = () => {
  return (
    <Layout>
      <PageHero image="/img/tanto-1200x768.jpg" />
      <Container>
        <ContentPage title="Train With Kris (Tanto) Paronto">
          <p>
            Come train with Kris (Tanto) Paronto depicted in the Movie 13 Hours, on August 29-30th 2020. This (2) day
            Course will train you in Carbine, Pistol and Hands on training. This is Beginner—Skilled and a great
            opportunity to train with the men that made us proud In Benghazi call Brian G. Dalton today @ 781-790-6462
          </p>
          <ButtonPrimary
            as="a"
            className="btn btn-primary"
            href="https://app.acuityscheduling.com/schedule.php?owner=19638832&appointmentType=14382988"
          >
            Signup Now
          </ButtonPrimary>
        </ContentPage>
      </Container>
    </Layout>
  );
};

export default KrisParontoPage;
