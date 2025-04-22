import { ReactElement } from 'react';

/**
 * Componente de cabeçalho (Header) que exibe o título principal da aplicação.
 * Neste caso, ele mostra o título "Heróis".
 *
 * @returns {ReactElement} - Retorna o elemento de cabeçalho com o título da página.
 */
export const Header = (): ReactElement => {
  return <h1 className="text-primary h2 text-center py-5">Heróis</h1>;
};
