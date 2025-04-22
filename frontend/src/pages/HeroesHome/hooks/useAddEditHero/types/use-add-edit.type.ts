import { FormEvent } from 'react';
import { IHero } from '../../../../../interfaces/hero/hero.interface';

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

export type UseAddEditHeroType = {
  show: boolean;
  edit: boolean;
  validated: boolean;
  hero: IHero | null;
  values: AddEditValues;
  handleClose: () => void;
  handleShow: () => void;
  getHero: (id: string) => void;
  editHero: (id: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
