import styled from 'styled-components';

const CardLayout = styled.div`
  position: relative;
  width: 200px;

  .card-content {
    background-color: var(--bs-white);
    border-radius: 12%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    padding: 20px;
    text-align: center;
    transition: 0.4s ease;

    img {
      border-radius: 50%;
      max-width: 100%;
      height: 110px;
      margin-bottom: 20px;
      object-fit: cover;
      width: 110px;
    }

    p {
      font-weight: 600;
      margin-bottom: 0;
    }

    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
  }

  &.disable {
    .card-content {
      img {
        filter: grayscale(100%);
        opacity: 0.7;
      }

      p {
        opacity: 0.7;
        color: #666;
      }
    }
  }

  .dropdown {
    position: absolute;
    top: 8px;
    right: 5px;
    z-index: 999;

    .dropdown-toggle {
      color: var(--bs-black);
      height: 35px;
      width: 30px;
      padding: 0;
      background: none;
      border: none;

      svg {
        top: 0;
        font-size: 1.4rem;
      }

      &::after {
        display: none;
      }

      &:hover,
      &.show {
        background: #e6eaf7;
      }
    }

    .dropdown-menu {
      border: none;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
      min-width: auto !important;
      text-align: center;
      width: 55px;

      button {
        svg {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export { CardLayout };
