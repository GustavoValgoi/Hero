import { IHero } from '../../../../../interfaces/hero/hero.interface';

export type UseSwitchHeroType = {
  hero: IHero | null;
  showSwitch: boolean;
  getHeroToSwitch: (id: string) => void;
  closeSwitch: () => void;
  executeSwitch: () => void;
};
