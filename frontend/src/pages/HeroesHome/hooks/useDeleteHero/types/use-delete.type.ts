import { IHero } from '../../../../../interfaces/hero/hero.interface';

export type UseDeleteHeroType = {
  showDelete: boolean;
  hero: IHero | null;
  closeRemove: () => void;
  removeHero: (id: string) => void;
  executeDelete: () => void;
};
