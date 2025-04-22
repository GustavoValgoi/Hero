import { ReactElement } from 'react';
import { Pagination } from 'react-bootstrap';
import { StylePagination } from './styled';
import { IPagination } from '../../common/interfaces/pagination.interface';

type Props<T> = {
  data: IPagination<T>;
  handlePageChange: (param: number) => void;
};

/**
 * Componente de paginação customizada, que exibe os itens de paginação de acordo com o número total de páginas
 * e permite navegar entre as páginas, mostrando uma quantidade limitada de páginas por vez.
 *
 * @param {IPagination<T>} data - Dados de paginação que incluem informações sobre a página atual,
 * total de páginas e outros detalhes da paginação.
 * @param {(param: number) => void} handlePageChange - Função que lida com a mudança de página,
 * recebendo o número da nova página a ser carregada.
 *
 * @return {ReactElement} - Retorna um componente de paginação com controles de navegação para avançar e voltar.
 */
export function CustomPagination<T>({
  data,
  handlePageChange,
}: Props<T>): ReactElement {
  /**
   * Função para renderizar os itens de paginação com base no total de páginas e página atual.
   * Exibe a página inicial, páginas vizinhas e usa "..." para representar páginas intermediárias.
   *
   * @param {IPagination<T>} arr - Dados de paginação, incluindo página atual e total de páginas.
   *
   * @return {JSX.Element[]} - Lista de itens de paginação para renderizar no componente.
   */
  function renderPaginationItems<T>(arr: IPagination<T>) {
    const pages = [];
    const maxPagesToShow = 5;

    if (arr.total_pages <= maxPagesToShow) {
      for (let i = 1; i <= arr.total_pages; i++) {
        pages.push(
          <Pagination.Item
            key={i}
            active={i === arr.page}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Pagination.Item>,
        );
      }
    } else {
      pages.push(
        <Pagination.Item
          key={1}
          active={1 === arr.page}
          onClick={() => handlePageChange(1)}
        >
          1
        </Pagination.Item>,
      );

      if (arr.page > 3) {
        pages.push(<Pagination.Ellipsis key="start-ellipsis" />);
      }

      const startPage = Math.max(2, arr.page - 1);
      const endPage = Math.min(arr.total_pages - 1, arr.page + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <Pagination.Item
            key={i}
            active={i === arr.page}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Pagination.Item>,
        );
      }

      if (arr.page < arr.total_pages - 2) {
        pages.push(<Pagination.Ellipsis key="end-ellipsis" />);
      }

      pages.push(
        <Pagination.Item
          key={arr.total_pages}
          active={arr.total_pages === arr.page}
          onClick={() => handlePageChange(arr.total_pages)}
        >
          {arr.total_pages}
        </Pagination.Item>,
      );
    }

    return pages;
  }

  return (
    <StylePagination>
      <Pagination.Prev
        className="previous-page"
        onClick={() => handlePageChange(data.page - 1)}
        disabled={data.page === 1}
      />
      {renderPaginationItems<T>(data)}
      <Pagination.Next
        className="next-page"
        onClick={() => handlePageChange(data.page + 1)}
        disabled={data.page === data.total_pages}
      />
    </StylePagination>
  );
}
