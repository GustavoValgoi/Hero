import { PrismaService } from '../prisma.service';

export class MockedPrismaService extends PrismaService {
  async $connect(): Promise<void> {
    return;
  }
}
