import { useEffect, useState } from 'react';
import { UseSwitchHeroType } from './types/use-switch.type';
import { AppDispatch } from '../../../../store';
import { useAppSelector } from '../../../../store/hooks';
import { findHeroById, updateHero } from '../../../../reducers/hero.reducer';

/**
 * Hook que gerencia a alternância do status ativo/inativo de um herói, incluindo exibição de modal.
 *
 * @param {AppDispatch} dispatch - Função de dispatch da store Redux.
 * @return {UseSwitchHeroType} Controles para buscar, alternar status e exibir modal de confirmação.
 */
export const useSwitchHero = (dispatch: AppDispatch): UseSwitchHeroType => {
  const { hero } = useAppSelector(state => state.hero);

  const [showSwitch, setShowSwitch] = useState<boolean>(false);
  const [switchHero, setSwitchHero] = useState<boolean>(false);

  const closeSwitch = (): void => {
    setShowSwitch(false);
    setSwitchHero(false);
  };

  const getHeroToSwitch = (id: string): void => {
    dispatch(findHeroById(id));
    setSwitchHero(true);
  };

  const executeSwitch = () => {
    if (hero) {
      dispatch(updateHero({ is_active: !hero.is_active, id: hero.id }));
    }
  };

  useEffect(() => {
    if (hero && switchHero) {
      setShowSwitch(true);
    }
  }, [hero]);

  return { showSwitch, closeSwitch, getHeroToSwitch, executeSwitch, hero };
};
