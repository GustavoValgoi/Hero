import { FormEvent, useEffect, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { AppDispatch } from '../../../store';
import { findAll } from '../../../reducers/hero.reducer';

export const useFindAllHeroes = (dispatch: AppDispatch) => {
  const { heroes } = useAppSelector(state => state.hero);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [iptSearch, setIptSearch] = useState<string>('');
  const [search, setSearch] = useState<boolean>(false);

  const urlParams = new URLSearchParams({
    limit: String(limit),
    page: String(page),
  });

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSearch(true);
    setLimit(10);
    setPage(1);

    const urlParams = new URLSearchParams({
      limit: String(limit),
      page: String(page),
      search: iptSearch,
    });

    dispatch(findAll(urlParams));
  };

  const handlePageChange = (newPage: number) => {
    if (heroes && newPage > 0 && newPage <= heroes?.total_pages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    if (!heroes && !search) {
      dispatch(findAll(urlParams));
    }
  }, [dispatch, heroes]);

  useEffect(() => {
    if (iptSearch) {
      urlParams.append('search', iptSearch);
    }
    dispatch(findAll(urlParams));
  }, [page]);

  return {
    heroes,
    iptSearch,
    setIptSearch,
    handleSearch,
    search,
    handlePageChange,
  };
};
