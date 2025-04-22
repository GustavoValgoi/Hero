import { FormEvent, useEffect, useState } from 'react';
import { AppDispatch } from '../../../store';
import {
  createHero,
  findHeroById,
  updateHero,
} from '../../../reducers/hero.reducer';
import { useAppSelector } from '../../../store/hooks';
import { ICreateHero } from '../../../interfaces/hero/create-hero.interface';
import { formatDateToInput } from '../../../utils/format-date.util';
import { StatusTypeEnum } from '../../../common/enums/status.enum';

export type AddEditValues = {
  name: string;
  nickname: string;
  universe: string;
  mainPower: string;
  avatar: string;
  dateOfBith: string;
  setName: (param: string) => void;
  setNickname: (param: string) => void;
  setUniverse: (param: string) => void;
  setMainPower: (param: string) => void;
  setAvatar: (param: string) => void;
  setDateOfBirth: (param: string) => void;
};

export const useAddEditHero = (dispatch: AppDispatch) => {
  const { hero, status, message } = useAppSelector(state => state.hero);

  const [show, setShow] = useState<boolean>(false);
  const [showHero, setShowHero] = useState<boolean>(false);
  const [validated, setValidated] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);

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
    setView(false);
    setValidated(false);
    resetStates();
  };

  const handleShow = (): void => setShow(true);

  const closeHero = (): void => setShowHero(false);

  const getHero = (id: string): void => {
    dispatch(findHeroById(id));
  };

  const viewHero = (id: string): void => {
    getHero(id);
    setView(true);
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
    if (hero) {
      if (edit) {
        setAvatar(hero.avatar_url);
        setName(hero.name);
        setNickname(hero.nickname);
        setDateOfBirth(formatDateToInput(hero.date_of_birth));
        setMainPower(hero.main_power);
        setUniverse(hero.universe);
        setId(hero.id);
        handleShow();
      }

      if (view) {
        setShowHero(true);
      }
    }
  }, [hero]);

  useEffect(() => {
    if (status === StatusTypeEnum.Success && message) {
      handleClose();
    }
  }, [status, message]);

  return {
    show,
    handleClose,
    handleShow,
    getHero,
    showHero,
    viewHero,
    hero,
    closeHero,
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
