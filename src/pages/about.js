import React from 'react';
import {Container} from 'react-bootstrap';

import ContentPage from '#root/components/ContentPage';
import Layout from '#root/components/Layout';
import LogoBanner from '#root/components/shared/LogoBanner';

const UtahConcealed = () => {
  return (
    <Layout>
      <Container>
        <ContentPage preTitle={<LogoBanner />} title="About">
          <p>
            New England Firearms Academy was founded in 2013 by John Jouvelis and Brian Dalton, with the primary purpose
            of providing quality firearms instruction and specializing in Defensive Firearms Training, Personal Safety
            and Home Protection.
          </p>

          <p>
            We recognized the need for quality firearms instruction in the New England area and are dedicated to
            providing a unique learning experience to all our students.
          </p>

          <p>
            Our instructors travel the country training and learning from the best so the we can bring this knowledge
            back to our students.
          </p>

          <p>
            Instructors attend yearly Instructor Development training classes are required to maintain the following
            certifications in:
          </p>

          <ul>
            <li>
              National Rifle Association: Home Firearm Safety, Basic Pistol, Rifle, Shotgun, PPIH, Range Safety Officer
            </li>
            <li>Massachusetts State Police -BFS</li>
            <li>Utah Bureau of Criminal Identification</li>
            <li>OC / Pepper spray</li>
            <li>CPR/AED First Aid</li>
            <li>Firearms Law</li>
            <li>Use of force</li>
            <li>Defensive Firearms Tactics</li>
          </ul>

          <p>
            Our skilled instructors possess over 35 years experience in Law Enforcement and Public Service and 20 years
            of Instructional experience. We can help everyone form the novice shooter to the highly experienced shooter.
            We custom tailor the “training experience” to the students ability.
          </p>
        </ContentPage>
      </Container>
    </Layout>
  );
};

export default UtahConcealed;
