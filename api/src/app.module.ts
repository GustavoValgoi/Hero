import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { HeroModule } from './hero/hero.module';

@Module({
  providers: [PrismaService],
  imports: [HeroModule],
})
export class AppModule {}
