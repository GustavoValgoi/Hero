import { ReactElement, ReactNode } from 'react';
import { LayoutContent } from './styled';
import { Container, Row } from 'react-bootstrap';
import { Header } from '../Header';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props): ReactElement => {
  return (
    <LayoutContent>
      <Container>
        <Header />
        <Row>{children}</Row>
      </Container>
    </LayoutContent>
  );
};
