import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { HeroService } from '../hero.service';
import { PrismaService } from '../../prisma/prisma.service';
import {
  createHeroMock,
  heroMock,
  heroPrismaMock,
} from '../__mocks__/hero.mock';
import { HeroRepository } from '../repositories/hero.repository';

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

  describe('delete', () => {
    it('should return a hero after delete by id', async () => {
      const response = await service.delete(heroMock[0].id);

      expect(response).toEqual(heroMock[0]);
      expect(prisma.hero.delete).toHaveBeenCalledTimes(1);
      expect(prisma.hero.delete).toHaveBeenCalledWith({
        where: { id: heroMock[0].id },
      });
    });

    it('should return an error when trying to delete a hero', async () => {
      jest
        .spyOn(prisma.hero, 'delete')
        .mockRejectedValueOnce(
          new BadRequestException(
            'Houve um problema ao excluir o herói, tente novamente!',
          ),
        );

      await expect(service.delete(heroMock[0].id)).rejects.toThrow(
        new BadRequestException(
          'Houve um problema ao excluir o herói, tente novamente!',
        ),
      );

      expect(prisma.hero.delete).toHaveBeenCalledTimes(1);
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

    it('should return an error when trying to create a hero', async () => {
      jest.spyOn(prisma.hero, 'create').mockRejectedValueOnce(Error);

      const response = await service.create(createHeroMock);

      console.log('response ', response);

      await expect(service.create(createHeroMock)).rejects.toThrow(
        new BadRequestException(
          'Houve um problema ao criar o herói, verifique os dados e tente novamente!',
        ),
      );

      expect(prisma.hero.create).toHaveBeenCalledTimes(1);
    });
  });
});
