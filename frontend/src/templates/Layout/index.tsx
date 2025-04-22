import { ReactElement, ReactNode } from 'react';
import { LayoutContent } from './styled';
import { Container, Row } from 'react-bootstrap';
import { Header } from '../Header';
import { Loading } from '../../components/Loading';
import { CustomToast } from '../../components/CustomToast';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props): ReactElement => {
  return (
    <LayoutContent>
      <Loading />
      <CustomToast />
      <Container>
        <Header />
        <Row>{children}</Row>
      </Container>
    </LayoutContent>
  );
};
