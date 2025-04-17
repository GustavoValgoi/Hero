import { Hero } from 'generated/prisma';

export class HeroEntity implements Hero {
  name: string;
  id: string;
  nickname: string;
  date_of_birth: Date;
  universe: string;
  main_power: string;
  avatar_url: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
