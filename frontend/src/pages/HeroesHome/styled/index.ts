import styled from 'styled-components';

const GridContent = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  min-height: 500px;
  padding: 30px 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 30px 0;
  }

  @media screen and (min-width: 990px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export { GridContent };
