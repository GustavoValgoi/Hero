import { ReactElement } from 'react';
import { TbMoodSad } from 'react-icons/tb';
import { GridContent } from './styled';
import { useHeroes } from './hooks/useHeroes';
import { useFindAllHeroes } from './hooks/useFindAllHeroes';
import { useAddEditHero } from './hooks/useAddEditHero';
import { useDeleteHero } from './hooks/useDeleteHero';
import { SearchBar } from './components/SearchBar';
import { HeroCard } from './components/HeroCard';
import { AddEditHeroModal } from './components/AddEditHeroModal';
import { ViewHeroModal } from './components/ViewHeroModal';
import { DeleteHeroModal } from './components/DeleteHeroModal';
import { CustomPagination } from '../../components/CustomPagination';

export const HeroesHome = (): ReactElement => {
  const { dispatch } = useHeroes();
  const { closeRemove, showDelete, removeHero, heroToDelete, executeDelete } =
    useDeleteHero(dispatch);
  const {
    heroes,
    handleSearch,
    iptSearch,
    setIptSearch,
    search,
    handlePageChange,
  } = useFindAllHeroes(dispatch);
  const {
    handleClose,
    show,
    handleShow,
    hero,
    viewHero,
    showHero,
    closeHero,
    handleSubmit,
    validated,
    values,
    editHero,
    edit,
  } = useAddEditHero(dispatch);

  return (
    <>
      <SearchBar
        create={handleShow}
        handleSearch={handleSearch}
        setValue={setIptSearch}
        value={iptSearch}
      />
      {heroes && heroes.data.length ? (
        <>
          <GridContent>
            {heroes.data.map(hero => (
              <HeroCard
                key={hero.id}
                hero={hero}
                handleEdit={editHero}
                handleRemove={removeHero}
                onClick={() => viewHero(hero.id)}
              />
            ))}
          </GridContent>
          <div className="d-flex justify-content-end">
            <CustomPagination
              data={heroes}
              handlePageChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <>
          {search ? (
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
      <ViewHeroModal handleClose={closeHero} hero={hero} show={showHero} />
      <DeleteHeroModal
        executeDelete={executeDelete}
        handleClose={closeRemove}
        show={showDelete}
        hero={heroToDelete}
      />
      <AddEditHeroModal
        validated={validated}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        values={values}
        edit={edit}
        show={show}
      />
    </>
  );
};
