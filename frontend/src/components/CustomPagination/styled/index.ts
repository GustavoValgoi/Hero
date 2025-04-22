import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';

const StylePagination = styled(Pagination)`
  li {
    margin: 0 2px;

    a {
      border-radius: 5px;
      background-color: #f0f0f0;
      border-color: #f0f0f0;
      color: #999;
      font-size: 1.1rem;
      font-weight: 600;

      &:hover {
        color: var(--bs-primary);
        background-color: #e6eaf7;
        border-color: #e6eaf7;
      }
    }

    &.active {
      span {
        border-radius: 5px;
        background-color: #e6eaf7;
        border-color: #e6eaf7;
        color: var(--bs-primary);
        font-weight: 600;
        font-size: 1.1rem;
      }
    }

    &.previous-page,
    &.next-page {
      span.page-link,
      a.page-link {
        border-radius: 5px;
        background: none;
        border: none;
        color: #999;
        font-size: 1.8rem;
        font-weight: 600;
        position: relative;
        top: 0;
        padding: 0 5px;
        height: 40px;
        width: 20px;

        span,
        a {
          position: absolute;
          top: -6px;
        }
      }

      a {
        &:hover {
          color: var(--bs-primary);
        }
      }
    }

    &.disabled {
      opacity: 0.4;
    }
  }
`;

export { StylePagination };
