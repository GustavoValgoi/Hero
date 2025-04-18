import { Test, TestingModule } from '@nestjs/testing';
import { HeroController } from '../hero.controller';
import { HeroService } from '../hero.service';
import { HeroRepository } from '../repositories/hero.repository';
import { PrismaService } from '../../prisma/prisma.service';
import {
  createHeroMock,
  findAllMock,
  heroMock,
  heroPrismaMock,
  updateHeroMock,
} from '../__mocks__/hero.mock';

describe('HeroController', () => {
  let controller: HeroController;
  let service: HeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HeroService,
        HeroRepository,
        { provide: PrismaService, useValue: heroPrismaMock },
      ],
      controllers: [HeroController],
    }).compile();

    controller = module.get<HeroController>(HeroController);
    service = module.get<HeroService>(HeroService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('findById', () => {
    it('should return a hero when searching for id', async () => {
      const spy = jest.spyOn(service, 'findById');
      const response = await controller.findById(heroMock[0].id);

      expect(response).toEqual(heroMock[0]);
      expect(spy.mock.calls[0][0]).toEqual(heroMock[0].id);
    });
  });

  describe('delete', () => {
    it('should return a hero after delete by id', async () => {
      const spy = jest.spyOn(service, 'delete');
      const response = await controller.delete(heroMock[0].id);

      expect(response).toEqual(heroMock[0]);
      expect(spy.mock.calls[0][0]).toEqual(heroMock[0].id);
    });
  });

  describe('create', () => {
    it('should return a hero after create', async () => {
      const spy = jest.spyOn(service, 'create');
      const response = await controller.create(createHeroMock);

      expect(response).toEqual(heroMock[0]);
      expect(spy.mock.calls[0][0]).toEqual(createHeroMock);
    });
  });

  describe('update', () => {
    it('should return a hero after update', async () => {
      const spy = jest.spyOn(service, 'update');
      const response = await controller.update(heroMock[0].id, updateHeroMock);

      expect(response).toEqual({
        ...heroMock[0],
        is_active: false,
        date_of_birth: new Date('1996-01-10'),
      });
      expect(spy.mock.calls[0][0]).toEqual(heroMock[0].id);
      expect(spy.mock.calls[0][1]).toEqual(updateHeroMock);
    });
  });

  describe('findAll', () => {
    it('should return an array of heroes with pagination object', async () => {
      const spy = jest.spyOn(service, 'findAll');
      const response = await controller.findAll({
        limit: 10,
        page: 1,
      });

      expect(response).toEqual(findAllMock);
      expect(spy.mock.calls[0][0]).toEqual({
        limit: 10,
        page: 1,
      });
    });
  });
});
