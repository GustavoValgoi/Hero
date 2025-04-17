import { Test, TestingModule } from '@nestjs/testing';
import { HeroService } from '../hero.service';
import { PrismaService } from '../../prisma/prisma.service';
import {
  createHeroMock,
  heroMock,
  heroPrismaMock,
} from '../__mocks__/hero.mock';
import { HeroRepository } from '../repositories/hero.repository';
import { NotFoundException } from '@nestjs/common';

describe('HeroService', () => {
  let service: HeroService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HeroService,
        HeroRepository,
        {
          provide: PrismaService,
          useValue: heroPrismaMock,
        },
      ],
    }).compile();

    service = module.get<HeroService>(HeroService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  describe('findById', () => {
    it('should return a hero when searching for id', async () => {
      const response = await service.findById(heroMock[0].id);

      expect(response).toEqual(heroMock[0]);
      expect(prisma.hero.findFirst).toHaveBeenCalledTimes(1);
      expect(prisma.hero.findFirst).toHaveBeenCalledWith({
        where: { id: heroMock[0].id },
      });
    });

    it('should throw an exception when not finding a hero by id', async () => {
      jest.spyOn(prisma.hero, 'findFirst').mockResolvedValueOnce(null);

      await expect(service.findById(heroMock[0].id)).rejects.toThrow(
        new NotFoundException('Herói não encontrado!'),
      );

      expect(prisma.hero.findFirst).toHaveBeenCalledTimes(1);
      expect(prisma.hero.findFirst).toHaveBeenCalledWith({
        where: { id: heroMock[0].id },
      });
    });
  });

  describe('create', () => {
    it('should return a hero after create', async () => {
      const response = await service.create(createHeroMock);

      expect(response).toEqual(heroMock[0]);
      expect(prisma.hero.create).toHaveBeenCalledTimes(1);
      expect(prisma.hero.create).toHaveBeenCalledWith({
        data: createHeroMock,
      });
    });
  });
});
