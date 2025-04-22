import { useEffect, useState } from 'react';
import { AppDispatch } from '../../../store';
import { deleteHero, findHeroById } from '../../../reducers/hero.reducer';
import { useAppSelector } from '../../../store/hooks';
import { StatusTypeEnum } from '../../../common/enums/status.enum';

export const useDeleteHero = (dispatch: AppDispatch) => {
  const { hero, message, status } = useAppSelector(state => state.hero);
  const [id, setId] = useState<string>('');
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [delHero, setDelHero] = useState<boolean>(false);

  const closeRemove = () => {
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

  useEffect(() => {
    if (status === StatusTypeEnum.Success && message) {
      closeRemove();
    }
  }, [status, message]);

  return {
    showDelete,
    closeRemove,
    removeHero,
    executeDelete,
    heroToDelete: hero,
  };
};
