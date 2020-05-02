import {Link} from 'gatsby';
import styled from 'styled-components';

const Btn = styled(Link).attrs({
  className: 'btn'
})`
  align-items: ${props => (props.vCenter ? 'center' : 'initial')};
  border-radius: 0;
  display: ${props => (props.vCenter ? 'inline-flex' : 'inline-block')};
  font-size: 13px;
  justify-content: ${props => (props.center && props.vCenter ? 'center' : 'initial')};
  padding: 12px 23px 12px 23px;

  &.btn-lg {
    padding: 15px 33px;
  }
`;

export default Btn;
