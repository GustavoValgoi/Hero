import { ReactElement } from 'react';
import { useHeroes } from './hooks/useHeroes';
import { useFindAllHeroes } from './hooks/useFindAllHeroes';
import { SearchBar } from './components/SearchBar';

import { GridContent } from './styled';
import { HeroCard } from './components/HeroCard';
import { AddEditHeroModal } from './components/AddEditHeroModal';
import { useAddEditHero } from './hooks/useAddEditHero';
import { ViewHeroModal } from './components/ViewHeroModal';

export const HeroesHome = (): ReactElement => {
  const { dispatch } = useHeroes();
  const { heroes } = useFindAllHeroes(dispatch);
  const { handleClose, show, handleShow, hero, viewHero, showHero, closeHero } =
    useAddEditHero(dispatch);

  return (
    <>
      <SearchBar create={handleShow} />
      <GridContent>
        {heroes && heroes.data.length ? (
          heroes.data.map(hero => (
            <HeroCard
              key={hero.id}
              hero={hero}
              onClick={() => viewHero(hero.id)}
            />
          ))
        ) : (
          <></>
        )}
        <ViewHeroModal handleClose={closeHero} hero={hero} show={showHero} />
        <AddEditHeroModal handleClose={handleClose} show={show} />
      </GridContent>
    </>
  );
};
