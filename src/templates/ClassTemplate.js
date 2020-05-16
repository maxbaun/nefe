import PropTypes from 'prop-types';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import styled from 'styled-components';

import ContactForm from '#root/components/ContactForm';
import Hero from '#root/components/Hero';
import Layout from '#root/components/Layout';
import {ButtonPrimary} from '#root/components/shared/Button';
import ClassMeta from '#root/components/shared/ClassMeta';
import PageTitle from '#root/components/shared/PageTitle';
import {mediaBreakpointUp} from '#root/helpers/responsive';

const ClassPageAside = styled.aside`
  display: none;

  ${mediaBreakpointUp('lg')} {
    display: block;
    order: 1;
  }
`;

const ClassPageAsideInner = styled.div`
  border: 1px solid #efefef;
  padding: 22px 20px;
`;

const ClassPageHero = styled(Hero)`
  img {
    object-fit: cover;
    object-position: center 30%;
  }
`;

const ClassPageInner = styled.div`
  display: grid;
  grid-gap: 15px;

  ${mediaBreakpointUp('lg')} {
    grid-gap: 30px;
    grid-template-columns: 3fr 1fr;
  }
`;

const ClassPageHeader = styled.div``;

const ClassPageMain = styled.section`
  ${mediaBreakpointUp('lg')} {
    order: 0;
  }
`;

const ClassPageMetaMobile = styled.div`
  ${mediaBreakpointUp('lg')} {
    display: none;
  }
`;

const Completion = styled.div`
  background-color: ${props => props.theme.whiteSmoke};
  padding: 30px 0;
`;

const CTA = styled.div`
  background-color: ${props => props.theme.whiteSmoke};
  padding: 40px 0;
`;

const ClassPageWrap = styled.div`
  padding: 2vh 0 6vh;
`;

const ClassTemplate = ({pageContext: {body, completion, cta, ctaTitle, duration, image, price, url, title, where}}) => {
  const meta = ({...props}) => <ClassMeta {...props} duration={duration} price={price} url={url} where={where} />;

  return (
    <Layout>
      {image ? <ClassPageHero image={image} /> : null}
      <Container>
        <ClassPageWrap>
          <ClassPageInner>
            <ClassPageAside>
              <ClassPageAsideInner>{meta({className: 'my-2'})}</ClassPageAsideInner>
            </ClassPageAside>
            <ClassPageMain>
              <ClassPageHeader className="my-3">
                <Row className="align-items-center">
                  <Col lg="9">
                    <PageTitle>{title}</PageTitle>
                  </Col>
                  <Col className="text-lg-right" lg="3"></Col>
                </Row>
              </ClassPageHeader>
              <ClassPageMetaMobile>{meta({className: 'my-3'})}</ClassPageMetaMobile>
              <div dangerouslySetInnerHTML={{__html: body}} />
            </ClassPageMain>
          </ClassPageInner>
          {completion ? (
            <Completion className="mt-4">
              <Container>
                <Row>
                  <Col lg="9">
                    <h3>{completion}</h3>
                  </Col>
                  <Col lg="3">
                    <ButtonPrimary
                      {...url}
                      className="mt-3"
                      style={{display: 'block', maxWidth: 300, margin: '0 auto', width: '100%'}}
                    >
                      Signup Now
                    </ButtonPrimary>
                  </Col>
                </Row>
              </Container>
            </Completion>
          ) : null}
        </ClassPageWrap>
      </Container>
      {cta ? (
        <CTA id="signup">
          <Container>
            <Col offset xs="12" md={{offset: 3, span: 6}}>
              <h3 className="mb-3">{ctaTitle}</h3>
              <ContactForm />
            </Col>
          </Container>
        </CTA>
      ) : null}
    </Layout>
  );
};

ClassTemplate.propTypes = {
  pageContext: PropTypes.shape({
    body: PropTypes.string,
    cta: PropTypes.bool,
    ctaTitle: PropTypes.string,
    completion: PropTypes.string,
    duration: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, note: PropTypes.string, value: PropTypes.string}))
    ]),
    scheduleSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.object,
    where: PropTypes.string
  })
};

export default ClassTemplate;
