import styled from 'styled-components';

import Button from './Button';

const ButtonPrimary = styled(Button).attrs({
  className: 'btn-primary'
})`
  color: #fff;
  /* background: linear-gradient(#EECC60, #d5af5b);
  border: none; */
  background-color: ${props => props.theme.barleyCorn};
`;

export default ButtonPrimary;
