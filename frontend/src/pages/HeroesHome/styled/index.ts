import styled from 'styled-components';

const GridContent = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(5, 1fr);
  min-height: 500px;
  padding: 30px 0;
`;

export { GridContent };
