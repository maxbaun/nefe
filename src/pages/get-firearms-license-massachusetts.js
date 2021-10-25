import {Link} from 'gatsby';
import React from 'react';
import {Container} from 'react-bootstrap';

import ContentPage from '#root/components/ContentPage';
import Layout from '#root/components/Layout';

const UtahConcealed = () => {
  return (
    <Layout>
      <Container>
        <ContentPage title="Get Your Certified Massachusetts Firearms Course">
          <h5 className="mt-4">
            If you’re interested in getting a firearms license (also known as a Firearms Identification Card, or FID, in
            Massachusetts, here are the steps you must follow:
          </h5>

          <ol>
            <li>
              You must complete a certified firearms safety course, like our{' '}
              <Link to="/certified-basic-firearms-safety-course">Certified Basic Firearms Safety Course.</Link>&nbsp;
              You must do this FIRST.
            </li>
            <li>
              You must complete an{' '}
              <a href="http://www.mass.gov/eopss/docs/chsb/firearms/firearms-identification-fid-card-or-license-to-carry-firearms-ltc-application.pdf">
                application
              </a>
              &nbsp;and present it at the police department in the city or town where you reside, or have a business.
              <ul>
                <li>The application must include the specific reason(s) for wanting a firearms license</li>
                <li>The application must include the name and contact information of two personal references.</li>
                <li>
                  The application must include&nbsp;information about past criminal convictions or felonies, as well as
                  about any history of domestic violence, mental illness, or drug/alcohol addiction.
                </li>
                <li>
                  The application must include proof of completion of a{' '}
                  <Link to="/certified-basic-firearms-safety-course">state certified firearms safety course</Link>.
                </li>
                <li>The application must include the requisite fee.</li>
              </ul>
            </li>
            <li>
              Once the application is submitted, applications must be either approved or denied within forty (40) days
              of the date of application. You can check the status of your application&nbsp;by contacting the{' '}
              <a className="titlelink" href="http://www.mass.gov/eopss/agencies/dcjis/">
                Department of Criminal Justice Information Services (DCJIS)
              </a>{' '}
              at (617) 660-4722.
            </li>
          </ol>
          <p>A license is valid for six (6) years.</p>

          <h5>If you move your residence or business:</h5>
          <ol>
            <li>
              You must submit a{' '}
              <a href="http://www.mass.gov/eopss/docs/chsb/firearms/change-of-address-notification-rev-08-20-13.pdf">
                change of address form
              </a>
              &nbsp;with the <a href="http://www.mass.gov/eopss/firearms-reg-and-laws/frb/">Firearms Records Bureau</a>
            </li>
            <li>You must submit the form to the police chief of the city or town of your new address.</li>
            <li>You must submit the form to the police chief of the city or town of your old address.</li>
          </ol>
          <p>All forms must be sent via Certified Mail within thirty (30) days of the change of address.</p>
        </ContentPage>
      </Container>
    </Layout>
  );
};

export default UtahConcealed;
