import { IHero } from '../../../../../interfaces/hero/hero.interface';

export type UseViewHeroType = {
  hero: IHero | null;
  showHero: boolean;
  viewHero: (id: string) => void;
  closeHero: () => void;
};
