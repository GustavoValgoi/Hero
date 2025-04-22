import { AppDispatch } from '../../../../../store';
import { UseAddEditHeroType } from '../../useAddEditHero/types/use-add-edit.type';
import { UseDeleteHeroType } from '../../useDeleteHero/types/use-delete.type';
import { UseFindAllHeroesType } from '../../useFindAllHeroes/types/use-find-all.type';
import { UseSwitchHeroType } from '../../useSwitchHero/types/use-switch.type';
import { UseViewHeroType } from '../../useViewHero/types/use-view.type';

export type UseHeroesType = {
  dispatch: AppDispatch;
  useFindAll: UseFindAllHeroesType;
  useSwitch: UseSwitchHeroType;
  useAddEdit: UseAddEditHeroType;
  useDelete: UseDeleteHeroType;
  useView: UseViewHeroType;
};
