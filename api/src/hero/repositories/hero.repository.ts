import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateHeroDto } from '../dtos/create.dto';
import { HeroEntity } from '../entities/hero.entity';
import { UpdateHeroDto } from '../dtos/update.dto';
import { IQuery } from '../../interfaces/query.interface';
import { IPagination } from '../../interfaces/pagination.interface';

@Injectable()
export class HeroRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateHeroDto): Promise<HeroEntity> {
    return this.prisma.hero.create({
      data: body,
    });
  }

  async update(id: string, body: UpdateHeroDto): Promise<HeroEntity> {
    return this.prisma.hero.update({
      where: { id },
      data: body,
    });
  }

  async findById(id: string): Promise<HeroEntity | null> {
    return this.prisma.hero.findFirst({
      where: { id },
    });
  }

  async delete(id: string): Promise<HeroEntity> {
    return this.prisma.hero.delete({
      where: { id },
    });
  }

  async findAll(query: IQuery): Promise<IPagination<HeroEntity>> {
    const where = query.search
      ? {
          OR: [
            { name: { contains: query.search } },
            { nickname: { contains: query.search } },
          ],
        }
      : {};

    const count = await this.prisma.hero.count({ where });
    const data = await this.prisma.hero.findMany({
      where,
      skip: (query.page - 1) * query.limit,
      take: query.limit,
    });

    return {
      limit: query.limit,
      page: query.page,
      total_pages: Math.ceil(count / query.limit),
      count,
      data,
    };
  }
}
