import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

import ContentPage from '#root/components/ContentPage';
import Layout from '#root/components/Layout';
import ScheduleEmbed from '#root/components/ScheduleEmbed';

const Schedule = styled(ScheduleEmbed)``;

const Signup = () => {
  return (
    <Layout>
      <Container>
        <ContentPage title="Signup For Firearms Training in Massachusetts">
          <Schedule
            className="mt-4"
            src="https://app.acuityscheduling.com/schedule.php?owner=19448867&template=class"
          />
        </ContentPage>
      </Container>
    </Layout>
  );
};

export default Signup;
