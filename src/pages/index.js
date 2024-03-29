import {Link} from 'gatsby';
import React from 'react';
import {Carousel, Col, Container, Row} from 'react-bootstrap';
import styled from 'styled-components';

import ClassCard from '#root/components/ClassCard';
import ContactForm from '#root/components/ContactForm';
import ContactInfo from '#root/components/ContactInfo';
import ContactSection from '#root/components/ContactSection';
import Layout from '#root/components/Layout';
import {ButtonPrimary} from '#root/components/shared/Button';
import Video from '#root/components/shared/Video';
import SocialIcons from '#root/components/SocialIcons';
import classes from '#root/data/classes';
import {mediaBreakpointUp} from '#root/helpers/responsive';

const CarouselCaption = styled(Carousel.Caption)`
  bottom: auto;
  top: 50%;
  transform: translateY(-50%);

  h1,
  h2,
  h3 {
    color: #fff;
    font-size: 2em;
    letter-spacing: 4px;
    text-transform: uppercase;

    ${mediaBreakpointUp('lg')} {
      font-size: 3em;
      letter-spacing: 8px;
    }
  }

  p {
    color: rgb(222, 222, 222);
    font-size: 1em;
    font-weight: 500;

    ${mediaBreakpointUp('lg')} {
      font-size: 1.2em;
    }
  }

  ${ButtonPrimary} {
    font-size: 12px;
    letter-spacing: 2px;
  }
`;

const CarouselImage = styled.div`
  position: relative;

  img {
    min-height: 400px;
    max-height: calc(75vh - 98px);
    object-fit: cover;
    width: 100%;
  }
`;

const CarouselImageOverlay = styled.div`
  background-color: ${props => props.theme.nero};
  height: 100%;
  left: 0;
  opacity: 0.6;
  position: absolute;
  top: 0;
  width: 100%;

  /* z-index: 0; */
`;

const popularClasses = classes.filter(c => c.popular);

const Home = () => (
  <Layout>
    <Carousel>
      {/* <Carousel.Item>
        <CarouselImage>
          <CarouselImageOverlay />
          <img
            alt="Train with Kris (Tanto) Paronto"
            className="img-fluid"
            src="/img/tanto-1200x768.jpg"
            style={{objectPosition: 'center 20%'}}
          />
        </CarouselImage>
        <CarouselCaption>
          <h3>Train with Kris (Tanto) Paronto</h3>
          <p>Come train with Kris (Tanto) Paronto depicted in the Movie 13 Hours, on August 29-30th 2020.</p>
          <ButtonPrimary className="btn-lg mt-2" to="/train-with-kris-paronto">
            Learn More
          </ButtonPrimary>
        </CarouselCaption>
      </Carousel.Item> */}
      <Carousel.Item>
        <CarouselImage>
          <CarouselImageOverlay />
          <img
            className="img-fluid"
            src="/img/firearms-class-7.jpg"
            alt="Basic Firearms Safety"
            style={{objectPosition: 'center 20%'}}
          />
        </CarouselImage>
        <CarouselCaption>
          <h1>Certified Massachusetts Basic Firearms Safety</h1>
          <p>
            This Basic Firearms Safety Class (LTC-007) is the required class for you to get your Firearms Permit in
            Massachusetts.
          </p>
          <ButtonPrimary className="btn-lg mt-2" to="/certified-basic-firearms-safety-course">
            Learn More
          </ButtonPrimary>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage>
          <CarouselImageOverlay />
          <img className="img-fluid" src="/img/classroom.jpg" alt="First slide" />
        </CarouselImage>
        <CarouselCaption>
          <h3>Utah Concealed Carry Permit</h3>
          <p>
            The Utah CCW permit will enable you to <strong>legally carry a concealed handgun in over 31 STATES!</strong>
          </p>
          <ButtonPrimary className="btn-lg mt-2" to="/utah-concealed-carry-permit">
            Learn More
          </ButtonPrimary>
        </CarouselCaption>
      </Carousel.Item>
    </Carousel>
    <section className="pt-5 bg-white">
      <Container>
        <p>
          {/* Complete (<em>Temporary</em>){' '}
          <strong>
            “<em>Online TRAINING</em>“
          </strong>{' '}
          is not approved by the Massachusetts State Police, during the Governors Mandated Business Closures, please be
          cautious of these claims,{' '}
          <strong>
            <em>Students can’t be fully certified online until they </em>physically go to the training facility offering
            such options to <em>complete the second phase of the training </em>
          </strong>
          (LTC-002) and please be aware this is required to be explained and offered at the training facilities offering
          such online training (LTC 020) not to be confused with the “LTC 002 “again the requirements/Options must be
          explained clearly by the facility providing the training under LTC 020.{' '}
          <em>
            <strong>
              Additionally what will be the waiting list to complete the second phase of this training with new Social
              Distancing Guidelines and limited class sizes?
            </strong>
          </em>{' '}
          This is one reason why the New England Firearms Academy is Not offering this option, we were considering it
          strongly but don’t see any advantage to this process and most importantly the physical handling of the firearm
          and classroom participation and interaction are compromised greatly. */}
          WE are in unprecedented times, everyone is pulling together as Americans and please be patient and don’t cut
          corners on something so important as quality training. Please{' '}
          <a href="https://app.acuityscheduling.com/schedule.php?owner=19638832" style={{textDecoration: 'underline'}}>
            sign up
          </a>{' '}
          to schedule you training with the New England Firearms Academy TODAY
        </p>
      </Container>
    </section>
    <section className="py-5 bg-white">
      <div className="py-lg-3">
        <Container>
          <Row>
            <Col md="6">
              <Video
                className="img-fluid mb-3 mb-md-0"
                src="/video/live-commercial.mov"
                thumbnail="/img/brian-dalton-radio-interview.png"
                width="100%"
              />
            </Col>
            <Col md="6">
              <div className="d-flex align-items-center h-100">
                <div>
                  <h3 className="mb-2">Personal Training</h3>
                  <p>
                    New England Firearms is pleased to offer private training for the Massachusetts Firearms License
                    (LTC-0007), NRA Certification, and the Multi-State permits. Now, you can schedule training at your
                    convenience, where and when you want.
                  </p>
                  <p>
                    The four hour class includes ALL training necessary to receive your Mass. LTC, as well as NRA
                    Certification, and Multi-State Concealed Carry permits. All attendees will receive all three
                    certifications.
                  </p>

                  <ButtonPrimary to="/personal-training">Learn More</ButtonPrimary>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    <section className="py-5 bg-dark">
      <Container>
        <h3 className="text-center text-light mb-4">Popular Classes</h3>
        <Row>
          {popularClasses.map((item, index) => (
            <Col key={index} md="4">
              <ClassCard
                className="mb-3"
                description={item.cardDescription}
                image={item.cardImage}
                linkHref={`/${item.slug}`}
                linkText="Learn More"
                title={item.title}
                style={{width: '100%'}}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    <section>
      <ContactSection />
    </section>
  </Layout>
);

export default Home;
