import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { HeroModule } from './hero/hero.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [HeroModule],
})
export class AppModule {}
