import { ICreateHero } from './create-hero.interface';

export interface IUpdateHero extends Partial<ICreateHero> {
  id: string;
}
