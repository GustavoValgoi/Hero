import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

const ViewModal = styled(Modal)`
  .modal-body {
    height: 400px;

    img {
      width: 140px;
      height: 140px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export { ViewModal };
