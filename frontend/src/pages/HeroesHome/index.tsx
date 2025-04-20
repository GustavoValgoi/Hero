import { ReactElement } from 'react';
import { useHeroes } from './hooks/useHeroes';
import { useFindAllHeroes } from './hooks/useFindAllHeroes';
import { SearchBar } from '../../components/SearchBar';
import { HeroCard } from '../../components/HeroCard';
import { GridContent } from './styled';

export const HeroesHome = (): ReactElement => {
  const { dispatch } = useHeroes();
  const { heroes } = useFindAllHeroes(dispatch);

  console.log('heroes ', heroes);

  return (
    <>
      <SearchBar />
      <GridContent>
        {heroes && heroes.data.length ? (
          heroes.data.map(hero => <HeroCard key={hero.id} hero={hero} />)
        ) : (
          <></>
        )}
      </GridContent>
    </>
  );
};
