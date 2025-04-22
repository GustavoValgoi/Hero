import { ReactElement } from 'react';
import { TbMoodSad } from 'react-icons/tb';
import { GridContent } from './styled';
import { useHeroes } from './hooks/useHeroes';
import { SearchBar } from './components/SearchBar';
import { HeroCard } from './components/HeroCard';
import { AddEditHeroModal } from './components/AddEditHeroModal';
import { ViewHeroModal } from './components/ViewHeroModal';
import { DeleteHeroModal } from './components/DeleteHeroModal';
import { SwitchHeroModal } from './components/SwitchHeroModal';
import { CustomPagination } from '../../components/CustomPagination';

export const HeroesHome = (): ReactElement => {
  const hooks = useHeroes();

  return (
    <>
      <SearchBar
        create={hooks.useAddEdit.handleShow}
        handleSearch={hooks.useFindAll.handleSearch}
        setValue={hooks.useFindAll.setIptSearch}
        value={hooks.useFindAll.iptSearch}
      />
      {hooks.useFindAll.heroes && hooks.useFindAll.heroes.data.length ? (
        <>
          <GridContent>
            {hooks.useFindAll.heroes.data.map(hero => (
              <HeroCard
                key={hero.id}
                hero={hero}
                className={!hero.is_active ? 'disable' : ''}
                handleEdit={hooks.useAddEdit.editHero}
                handleRemove={hooks.useDelete.removeHero}
                handleSwitch={hooks.useSwitch.getHeroToSwitch}
                onClick={() => hooks.useView.viewHero(hero.id)}
              />
            ))}
          </GridContent>
          <div className="d-flex justify-content-end">
            <CustomPagination
              data={hooks.useFindAll.heroes}
              handlePageChange={hooks.useFindAll.handlePageChange}
            />
          </div>
        </>
      ) : (
        <>
          {hooks.useFindAll.search ? (
            <h3 className="h4 text-secondary text-center my-5">
              <TbMoodSad /> Nenhum herói encontrado na sua pesquisa!
            </h3>
          ) : (
            <h3 className="h4 text-secondary text-center mt-5">
              <TbMoodSad /> Nenhum herói cadastrado ainda ainda, cadastre o
              primeiro!
            </h3>
          )}
        </>
      )}
      <ViewHeroModal
        handleClose={hooks.useView.closeHero}
        hero={hooks.useView.hero}
        show={hooks.useView.showHero}
      />
      <DeleteHeroModal
        executeDelete={hooks.useDelete.executeDelete}
        handleClose={hooks.useDelete.closeRemove}
        show={hooks.useDelete.showDelete}
        hero={hooks.useDelete.hero}
      />
      <AddEditHeroModal
        validated={hooks.useAddEdit.validated}
        handleSubmit={hooks.useAddEdit.handleSubmit}
        handleClose={hooks.useAddEdit.handleClose}
        values={hooks.useAddEdit.values}
        edit={hooks.useAddEdit.edit}
        show={hooks.useAddEdit.show}
      />
      <SwitchHeroModal
        hero={hooks.useSwitch.hero}
        executeSwitch={hooks.useSwitch.executeSwitch}
        handleClose={hooks.useSwitch.closeSwitch}
        show={hooks.useSwitch.showSwitch}
      />
    </>
  );
};
