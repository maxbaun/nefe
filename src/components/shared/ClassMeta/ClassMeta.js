import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {ButtonPrimary} from '../Button';

const ClassMetaWrapper = styled.div`
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;

    > li {
      span:first-child {
        font-weight: 700;

        &:not(:empty) {
          margin-right: 0.4em;
        }
      }

      > ul {
        list-style: none;
        margin-bottom: 10px;
        padding: 0;

        > li {
          > div {
            font-size: 10px;
            font-style: italic;
          }
        }
      }
    }
  }
`;

const ClassMeta = ({duration, price, where, url, ...props}) => {
  return (
    <ClassMetaWrapper {...props}>
      <ul>
        {typeof price === 'string' ? (
          <li>
            <span>Cost:</span>
            <span>{price}</span>
          </li>
        ) : (
          <li>
            <span>Cost:</span>
            <ul>
              {price.map((p, index) => (
                <li key={index}>
                  <span>{p.value}</span>
                  <span>({p.label})</span>
                  {p.note ? <div>** {p.note} **</div> : null}
                </li>
              ))}
            </ul>
          </li>
        )}

        <li>
          <span>Class Duration:</span>
          <span>{duration}</span>
        </li>
        <li>
          <span>Where:</span>
          <span>{where}</span>
        </li>
      </ul>
      <ButtonPrimary {...url} className="mt-2" variant="primary">
        Signup For This Class
      </ButtonPrimary>
    </ClassMetaWrapper>
  );
};

ClassMeta.propTypes = {
  duration: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, note: PropTypes.string, value: PropTypes.string}))
  ]),
  url: PropTypes.object,
  where: PropTypes.string
};

ClassMeta.defaultProps = {
  url: {}
};

export default ClassMeta;
