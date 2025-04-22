import { useEffect, useState } from 'react';
import { UseViewHeroType } from './types/use-view.type';
import { useAppSelector } from '../../../../store/hooks';
import { findHeroById } from '../../../../reducers/hero.reducer';
import { AppDispatch } from '../../../../store';

/**
 * Hook que gerencia a visualização de detalhes de um herói, incluindo busca e exibição em modal.
 *
 * @param {AppDispatch} dispatch - Função de dispatch da store Redux.
 * @return {UseViewHeroType} Controles para buscar, exibir e fechar visualização de herói.
 */
export const useViewHero = (dispatch: AppDispatch): UseViewHeroType => {
  const { hero } = useAppSelector(state => state.hero);

  const [view, setView] = useState<boolean>(false);
  const [showHero, setShowHero] = useState<boolean>(false);

  const closeHero = (): void => {
    setShowHero(false);
    setView(false);
  };

  const getHero = (id: string): void => {
    dispatch(findHeroById(id));
  };

  const viewHero = (id: string): void => {
    getHero(id);
    setView(true);
  };

  useEffect(() => {
    if (hero && view) {
      setShowHero(true);
    }
  }, [hero]);

  return { viewHero, hero, closeHero, showHero };
};
