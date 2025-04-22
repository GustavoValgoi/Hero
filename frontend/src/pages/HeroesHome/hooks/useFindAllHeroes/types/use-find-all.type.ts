import { FormEvent } from 'react';
import { IPagination } from '../../../../../common/interfaces/pagination.interface';
import { IHero } from '../../../../../interfaces/hero/hero.interface';

export type UseFindAllHeroesType = {
  heroes: IPagination<IHero> | null;
  iptSearch: string;
  search: boolean;
  setIptSearch: (param: string) => void;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  handlePageChange: (page: number) => void;
  executeFindAll: () => void;
};
