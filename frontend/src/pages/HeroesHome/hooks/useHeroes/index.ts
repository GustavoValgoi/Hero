import { useEffect } from 'react';
import { UseHeroesType } from './types/use-heroes.type';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { StatusTypeEnum } from '../../../../common/enums/status.enum';
import { useFindAllHeroes } from '../useFindAllHeroes';
import { useSwitchHero } from '../useSwitchHero';
import { useAddEditHero } from '../useAddEditHero';
import { useDeleteHero } from '../useDeleteHero/useDeleteHero';
import { useViewHero } from '../useViewHero';

/**
 * Hook que centraliza as ações relacionadas aos heróis (buscar, editar, remover, etc).
 * Gerencia também o fechamento de modais após ações bem-sucedidas.
 *
 * @return {UseHeroesType} Ações agrupadas para gerenciamento de heróis e o dispatch global.
 */
export const useHeroes = (): UseHeroesType => {
  const dispatch = useAppDispatch();

  const { status, message, heroes } = useAppSelector(state => state.hero);

  const useFindAll = useFindAllHeroes(dispatch);
  const useSwitch = useSwitchHero(dispatch);
  const useAddEdit = useAddEditHero(dispatch);
  const useDelete = useDeleteHero(dispatch);
  const useView = useViewHero(dispatch);

  useEffect(() => {
    if (status === StatusTypeEnum.Success && message) {
      useView.closeHero();
      useDelete.closeRemove();
      useAddEdit.handleClose();
      useSwitch.closeSwitch();

      if (!heroes) {
        useFindAll.executeFindAll();
      }
    }
  }, [status, message]);

  return { dispatch, useFindAll, useSwitch, useAddEdit, useDelete, useView };
};
