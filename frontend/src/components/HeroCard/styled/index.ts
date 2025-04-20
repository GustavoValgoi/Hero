import styled from 'styled-components';

const CardLayout = styled.div`
  background-color: var(--bs-white);
  border-radius: 12%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  position: relative;
  text-align: center;
  width: 200px;

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
`;

export { CardLayout };
