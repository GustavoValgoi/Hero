import { IPagination } from 'src/interfaces/pagination.interface';
import { CreateHeroDto } from '../dtos/create.dto';
import { UpdateHeroDto } from '../dtos/update.dto';
import { HeroEntity } from '../entities/hero.entity';

export const heroMock: HeroEntity[] = [
  {
    id: '7b241be5-0248-4765-8e56-782c13c627a4',
    name: 'Tony Stark',
    nickname: 'Homem de Ferro',
    date_of_birth: new Date('1995-01-10'),
    universe: 'Marvel',
    main_power: 'Força',
    avatar_url: 'https://link-image.com.br/fake-img.jpg',
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export const createHeroMock: CreateHeroDto = {
  name: 'Tony Stark',
  nickname: 'Homem de Ferro',
  date_of_birth: new Date('1995-01-10'),
  universe: 'Marvel',
  main_power: 'Força',
  avatar_url: 'https://link-image.com.br/fake-img.jpg',
  is_active: true,
};

export const updateHeroMock: UpdateHeroDto = {
  date_of_birth: new Date('1996-01-10'),
  is_active: false,
};

export const findAllMock: IPagination<HeroEntity> = {
  page: 1,
  limit: 10,
  count: 1,
  total_pages: 1,
  data: heroMock,
};

export const heroPrismaMock = {
  hero: {
    findFirst: jest.fn().mockResolvedValue(heroMock[0]),
    findMany: jest.fn().mockResolvedValue(heroMock),
    create: jest.fn().mockResolvedValue(heroMock[0]),
    update: jest.fn().mockResolvedValue({
      ...heroMock[0],
      is_active: false,
      date_of_birth: new Date('1996-01-10'),
    }),
    delete: jest.fn().mockResolvedValue(heroMock[0]),
    count: jest.fn().mockResolvedValue(1),
  },
};
