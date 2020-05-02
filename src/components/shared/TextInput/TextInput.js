import PropTypes from 'prop-types';
import React, {forwardRef} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: #4e4e4e;
  background-color: #fff;
  border: none;
  font-size: 15px;
  padding: 20px 22px;
  width: 100%;

  ::-moz-placeholder,
  ::placeholder {
    color: #4e4e4e;
  }
`;

const Wrap = styled.div`
  margin-bottom: 14px;
`;

const TextInput = forwardRef(({id, label, name, type, ...props}, ref) => {
  props = {
    ...props
  };

  if (type) {
    props.type = type;
  }

  return (
    <Wrap>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <Input {...props} id={id} name={name} ref={ref} />
    </Wrap>
  );
});

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;
