import { FormEvent, useEffect, useState } from 'react';
import { AppDispatch } from '../../../../store';
import {
  createHero,
  findHeroById,
  updateHero,
} from '../../../../reducers/hero.reducer';
import { useAppSelector } from '../../../../store/hooks';
import { ICreateHero } from '../../../../interfaces/hero/create-hero.interface';
import { formatDateToInput } from '../../../../utils/format-date.util';
import { UseAddEditHeroType } from './types/use-add-edit.type';

/**
 * Hook que gerencia o formulário de criação e edição de heróis, incluindo validações e estados do modal.
 *
 * @param {AppDispatch} dispatch - Função de dispatch da store Redux.
 * @return {UseAddEditHeroType} Controles e estados para manipulação do herói (adicionar/editar), formulário e modal.
 */
export const useAddEditHero = (dispatch: AppDispatch): UseAddEditHeroType => {
  const { hero } = useAppSelector(state => state.hero);

  const [validated, setValidated] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [universe, setUniverse] = useState<string>('');
  const [mainPower, setMainPower] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [dateOfBith, setDateOfBirth] = useState<string>('');

  const resetStates = (): void => {
    setName('');
    setNickname('');
    setMainPower('');
    setDateOfBirth('');
    setAvatar('');
    setUniverse('');
    setId('');
  };

  const handleClose = (): void => {
    setShow(false);
    setEdit(false);
    setValidated(false);
    resetStates();
  };

  const handleShow = (): void => setShow(true);

  const getHero = (id: string): void => {
    dispatch(findHeroById(id));
  };

  const editHero = (id: string): void => {
    getHero(id);
    setEdit(true);
    handleShow();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const data: ICreateHero = {
        name,
        nickname,
        main_power: mainPower,
        date_of_birth: dateOfBith,
        universe,
        avatar_url: avatar,
        is_active: true,
      };

      if (edit) {
        dispatch(updateHero({ ...data, id }));
      } else {
        dispatch(createHero(data));
      }
    }

    setValidated(true);
  };

  useEffect(() => {
    if (hero && edit) {
      setAvatar(hero.avatar_url);
      setName(hero.name);
      setNickname(hero.nickname);
      setDateOfBirth(formatDateToInput(hero.date_of_birth));
      setMainPower(hero.main_power);
      setUniverse(hero.universe);
      setId(hero.id);
      handleShow();
    }
  }, [hero]);

  return {
    show,
    handleClose,
    handleShow,
    getHero,
    hero,
    handleSubmit,
    editHero,
    validated,
    edit,
    values: {
      name,
      setName,
      nickname,
      setNickname,
      universe,
      setUniverse,
      mainPower,
      setMainPower,
      avatar,
      setAvatar,
      dateOfBith,
      setDateOfBirth,
    },
  };
};
