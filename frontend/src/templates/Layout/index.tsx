import { ReactElement, ReactNode } from 'react';
import { Container, Row } from 'react-bootstrap';
import { LayoutContent } from './styled';
import { Header } from '../Header';
import { Loading } from '../../components/Loading';
import { CustomToast } from '../../components/CustomToast';

type Props = {
  children: ReactNode;
};

/**
 * Componente de Layout principal que estrutura a aplicação, encapsulando os componentes principais da UI.
 * Ele inclui a renderização do cabeçalho, o conteúdo da aplicação (passado como 'children'),
 * o indicador de carregamento (Loading) e as notificações (CustomToast).
 *
 * Este componente serve como uma estrutura básica para outras páginas ou seções da aplicação.
 * Ele organiza o layout utilizando o `Container` e o `Row` do React Bootstrap para garantir o design responsivo.
 *
 * @param {ReactNode} children - Conteúdo dinâmico passado para ser renderizado dentro do layout.
 *
 * @returns {ReactElement} - Retorna o layout completo com cabeçalho, loading e notificações.
 */
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
