import { useEffect, useState } from 'react';
import { AppDispatch } from '../../../store';
import { findHeroById } from '../../../reducers/hero.reducer';
import { useAppSelector } from '../../../store/hooks';

export const useAddEditHero = (dispatch: AppDispatch) => {
  const { hero } = useAppSelector(state => state.hero);

  const [show, setShow] = useState<boolean>(false);
  const [showHero, setShowHero] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeHero = () => setShowHero(false);

  const getHero = (id: string) => {
    dispatch(findHeroById(id));
  };

  const viewHero = (id: string) => {
    getHero(id);
    setShowHero(true);
  };

  useEffect(() => {
    if (hero && showHero) {
      console.log('hero ', hero);
    }
  }, [hero, showHero]);

  return {
    show,
    handleClose,
    handleShow,
    getHero,
    showHero,
    viewHero,
    hero,
    closeHero,
  };
};
