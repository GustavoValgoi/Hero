import { useEffect, useState } from 'react';
import { AppDispatch } from '../../../../store';
import { deleteHero, findHeroById } from '../../../../reducers/hero.reducer';
import { useAppSelector } from '../../../../store/hooks';
import { UseDeleteHeroType } from './types/use-delete.type';

/**
 * Hook que gerencia a lógica de remoção de heróis, incluindo controle de modal e confirmação.
 *
 * @param {AppDispatch} dispatch - Função de dispatch da store Redux.
 * @return {UseDeleteHeroType} Controles para exibir modal, buscar e deletar herói selecionado.
 */
export const useDeleteHero = (dispatch: AppDispatch): UseDeleteHeroType => {
  const { hero } = useAppSelector(state => state.hero);
  const [id, setId] = useState<string>('');
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [delHero, setDelHero] = useState<boolean>(false);

  const closeRemove = (): void => {
    setShowDelete(false);
    setDelHero(false);
    setId('');
  };

  const executeDelete = (): void => {
    dispatch(deleteHero(id));
  };

  const removeHero = (id: string): void => {
    dispatch(findHeroById(id));
    setDelHero(true);
  };

  useEffect(() => {
    if (hero && delHero) {
      setShowDelete(true);
      setId(hero.id);
    }
  }, [hero]);

  return {
    showDelete,
    closeRemove,
    removeHero,
    executeDelete,
    hero,
  };
};
