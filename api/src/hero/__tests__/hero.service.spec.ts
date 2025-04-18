import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { HeroService } from '../hero.service';
import { PrismaService } from '../../prisma/prisma.service';
import {
  createHeroMock,
  findAllMock,
  heroMock,
  heroPrismaMock,
  updateHeroMock,
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
      jest.spyOn(prisma.hero, 'delete').mockRejectedValueOnce(Error);

      await expect(service.delete('invalid')).rejects.toThrow(
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

      await expect(
        service.create({
          ...createHeroMock,
          date_of_birth: new Date('invalid'),
        }),
      ).rejects.toThrow(
        new BadRequestException(
          'Houve um problema ao criar o herói, verifique os dados e tente novamente!',
        ),
      );

      expect(prisma.hero.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should return a hero after update', async () => {
      const response = await service.update(heroMock[0].id, updateHeroMock);

      expect(response).toEqual({
        ...heroMock[0],
        is_active: false,
        date_of_birth: new Date('1996-01-10'),
      });
      expect(prisma.hero.update).toHaveBeenCalledTimes(1);
      expect(prisma.hero.update).toHaveBeenCalledWith({
        where: { id: heroMock[0].id },
        data: updateHeroMock,
      });
    });

    it('should return an error when trying to update a hero', async () => {
      jest.spyOn(prisma.hero, 'update').mockRejectedValueOnce(Error);

      await expect(
        service.update(heroMock[0].id, {
          ...heroMock[0],
          is_active: false,
          date_of_birth: new Date('invalid'),
        }),
      ).rejects.toThrow(
        new BadRequestException(
          'Houve um problema ao atualizar o herói, verifique os dados e tente novamente!',
        ),
      );

      expect(prisma.hero.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should return an array of heroes with pagination object', async () => {
      const response = await service.findAll({
        limit: 10,
        page: 1,
      });

      expect(response).toEqual(findAllMock);
      expect(prisma.hero.count).toHaveBeenCalledTimes(1);
      expect(prisma.hero.findMany).toHaveBeenCalledTimes(1);
      expect(prisma.hero.findMany).toHaveBeenCalledWith({
        where: {},
        orderBy: { created_at: 'desc' },
        take: 10,
        skip: 0,
      });
    });

    it('should return an array of heroes with pagination object and not send query params', async () => {
      const response = await service.findAll({
        limit: Number(undefined),
        page: Number(undefined),
      });

      expect(response).toEqual(findAllMock);
      expect(prisma.hero.count).toHaveBeenCalledTimes(1);
      expect(prisma.hero.findMany).toHaveBeenCalledTimes(1);
      expect(prisma.hero.findMany).toHaveBeenCalledWith({
        where: {},
        orderBy: { created_at: 'desc' },
        take: 10,
        skip: 0,
      });
    });

    it('should return an array of heroes result after search by name', async () => {
      const response = await service.findAll({
        search: heroMock[0].name,
        limit: 10,
        page: 1,
      });

      expect(response).toEqual(findAllMock);
      expect(prisma.hero.count).toHaveBeenCalledTimes(1);
      expect(prisma.hero.findMany).toHaveBeenCalledTimes(1);
      expect(prisma.hero.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { name: { contains: heroMock[0].name } },
            { nickname: { contains: heroMock[0].name } },
          ],
        },
        orderBy: { created_at: 'desc' },
        take: 10,
        skip: 0,
      });
    });
  });
});
