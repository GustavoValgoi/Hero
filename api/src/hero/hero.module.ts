import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { PrismaService } from '../prisma/prisma.service';
import { HeroRepository } from './repositories/hero.repository';

@Module({
  controllers: [HeroController],
  providers: [HeroService, HeroRepository, PrismaService],
})
export class HeroModule {}
