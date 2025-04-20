import { ReactElement } from 'react';
import { Pagination } from 'react-bootstrap';
import { IPagination } from '../../common/interfaces/pagination.interface';

type Props<T> = {
  data: IPagination<T>;
  handlePageChange: (param: number) => void;
};

export function CustomPagination<T>({
  data,
  handlePageChange,
}: Props<T>): ReactElement {
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
    <Pagination>
      <Pagination.First
        onClick={() => handlePageChange(1)}
        disabled={data.page === 1}
      />
      <Pagination.Prev
        onClick={() => handlePageChange(data.page - 1)}
        disabled={data.page === 1}
      />
      {renderPaginationItems<T>(data)}
      <Pagination.Next
        onClick={() => handlePageChange(data.page + 1)}
        disabled={data.page === data.total_pages}
      />
      <Pagination.Last
        onClick={() => handlePageChange(data.total_pages)}
        disabled={data.page === data.total_pages}
      />
    </Pagination>
  );
}
