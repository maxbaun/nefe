import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

import {ButtonPrimary} from '../shared/Button';

const ClassCardWrap = styled(Card)``;

const ClassCard = ({description, linkHref, linkText, image, title, ...props}) => {
  return (
    <Card {...props}>
      <Card.Img varient="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ButtonPrimary className="btn-sm" to={linkHref}>
          {linkText}
        </ButtonPrimary>
      </Card.Body>
    </Card>
  );
};

ClassCard.propTypes = {
  description: PropTypes.string,
  linkHref: PropTypes.string,
  linkText: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
};

ClassCard.defaultProps = {
  linkText: 'Signup For This Class'
};

export default ClassCard;
