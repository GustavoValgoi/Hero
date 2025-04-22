import { ReactElement } from 'react';
import { Spinner } from 'react-bootstrap';
import { useLoader } from './hooks/useLoader';

/**
 * Componente de carregamento (loading) que exibe um indicador de carregamento (spinner)
 * no centro da tela quando a aplicação está em processo de carregamento.
 *
 * Utiliza o hook `useLoader` para verificar se a aplicação está em estado de carregamento.
 * Caso o estado `loading` seja verdadeiro, um spinner é exibido sobrepondo a tela com um fundo semitransparente.
 *
 * @return {ReactElement} - Retorna um spinner centralizado se o estado de carregamento for verdadeiro.
 */
export const Loading = (): ReactElement => {
  const { loading } = useLoader();

  return (
    <>
      {loading && (
        <div className="top-0 w-100 h-100 z-3 position-fixed bg-light bg-opacity-50 d-flex align-items-center justify-content-center">
          <Spinner variant="primary" animation="border" />
        </div>
      )}
    </>
  );
};
