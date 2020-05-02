import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ScheduleEmbedWrap = styled.div``;

const ScheduleEmbed = ({src, ...props}) => {
  return (
    <ScheduleEmbedWrap {...props}>
      <iframe src={src} title="Schedule Appointment" width="100%" height="800" frameBorder="0" />
    </ScheduleEmbedWrap>
  );
};

ScheduleEmbed.propTypes = {
  src: PropTypes.string
};

export default ScheduleEmbed;
