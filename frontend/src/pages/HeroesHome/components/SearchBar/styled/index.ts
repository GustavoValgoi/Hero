import { InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

const InputGroupSearch = styled(InputGroup)`
  height: 35px;

  .form-control {
    &::placeholder {
      color: #999;
      font-size: 0.9rem;
    }
  }
`;

export { InputGroupSearch };
