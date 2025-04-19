import { Test, TestingModule } from '@nestjs/testing';
import { MockedPrismaService } from '../__mocks__/prisma.mock';
import { PrismaService } from '../prisma.service';
import { PrismaClient } from 'generated/prisma';

describe('PrismaService', () => {
  let service: PrismaService;
  let prisma: PrismaClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, PrismaClient],
    })
      .overrideProvider(PrismaService)
      .useClass(MockedPrismaService)
      .compile();

    service = module.get<PrismaService>(PrismaService);
    prisma = module.get<PrismaClient>(PrismaClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  describe('onModuleInit', () => {
    it('deve fazer a conexão com o DB', async () => {
      const spy = jest.spyOn(service, '$connect');
      await service.onModuleInit();
      expect(spy).toHaveBeenCalled();
    });
  });
});
