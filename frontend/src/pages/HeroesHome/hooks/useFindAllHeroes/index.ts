import { FormEvent, useEffect, useState } from 'react';
import { UseFindAllHeroesType } from './types/use-find-all.type';
import { useAppSelector } from '../../../../store/hooks';
import { AppDispatch } from '../../../../store';
import { findAll } from '../../../../reducers/hero.reducer';

/**
 * Hook que gerencia a busca paginada e com filtro de heróis.
 * Controla estados locais como página, limite e input de busca.
 *
 * @param {AppDispatch} dispatch - Função de dispatch da store Redux.
 * @return {UseFindAllHeroesType} Controles de busca e paginação de heróis.
 */
export const useFindAllHeroes = (
  dispatch: AppDispatch,
): UseFindAllHeroesType => {
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

  const executeFindAll = () => {
    setIptSearch('');
    dispatch(
      findAll(
        new URLSearchParams({
          limit: String(10),
          page: String(1),
          search: String(''),
        }),
      ),
    );
  };

  useEffect(() => {
    if (!heroes && !search) {
      executeFindAll();
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
    executeFindAll,
  };
};
