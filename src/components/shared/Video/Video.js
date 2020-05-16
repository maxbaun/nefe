import {faPlayCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalClose = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  line-height: 1;
  position: absolute;
  right: 0;
  top: -5px;
`;

const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 0;
`;

const VideoButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 6rem;
`;

const VideoWrap = styled.div`
  max-height: 100%;

  video {
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`;

export const Video = ({imageProps, src, thumbnail, ...props}) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper {...props}>
      <img {...imageProps} src={thumbnail} />
      <Overlay>
        <VideoButton onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faPlayCircle} />
        </VideoButton>
      </Overlay>
      <Modal
        shouldCloseOnOverlayClick={true}
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={{
          content: {backgroundColor: 'transparent', border: 'none', overflow: 'hidden', padding: 0},
          overlay: {backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 999}
        }}
      >
        <ModalClose onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </ModalClose>
        <VideoWrap>
          <video autoPlay src={src} />
        </VideoWrap>
      </Modal>
    </Wrapper>
  );
};

Video.propTypes = {
  imageProps: PropTypes.object,
  src: PropTypes.string,
  thumbnail: PropTypes.string
};

Video.defaultProps = {
  imageProps: {}
};

export default Video;
