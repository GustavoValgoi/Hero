import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { AppDispatch } from '../../../store';
import { findAll } from '../../../reducers/hero.reducer';

export const useFindAllHeroes = (dispatch: AppDispatch) => {
  const { heroes, hero, message, status } = useAppSelector(state => state.hero);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [iptSearch, setIptSearch] = useState<string>('');

  const urlParams = new URLSearchParams({
    limit: String(limit),
    page: String(page),
  });

  useEffect(() => {
    if (!heroes) {
      dispatch(findAll(urlParams));
    }
  }, [dispatch, page, limit, heroes]);

  return { heroes, hero, message, status, iptSearch, setIptSearch };
};
