import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { HeroRepository } from './repositories/hero.repository';
import { CreateHeroDto } from './dtos/create.dto';
import { UpdateHeroDto } from './dtos/update.dto';
import { HeroEntity } from './entities/hero.entity';
import { IPagination } from '../interfaces/pagination.interface';
import { IQuery } from '../interfaces/query.interface';

@Injectable()
export class HeroService {
  constructor(private readonly heroRepository: HeroRepository) {}

  async create(body: CreateHeroDto): Promise<HeroEntity> {
    try {
      return this.heroRepository.create({
        ...body,
        date_of_birth: new Date(body.date_of_birth),
      });
    } catch {
      throw new BadRequestException(
        'Houve um problema ao criar o herói, verifique os dados e tente novamente!',
      );
    }
  }

  async update(id: string, body: UpdateHeroDto): Promise<HeroEntity> {
    await this.findById(id);

    try {
      if (body.date_of_birth) {
        body.date_of_birth = new Date(body.date_of_birth);
      }

      return this.heroRepository.update(id, body);
    } catch {
      throw new BadRequestException(
        'Houve um problema ao atualizar o herói, verifique os dados e tente novamente!',
      );
    }
  }

  async findById(id: string): Promise<HeroEntity> {
    const hero = await this.heroRepository.findById(id);

    if (!hero) {
      throw new NotFoundException('Herói não encontrado!');
    }

    return hero;
  }

  async delete(id: string): Promise<HeroEntity> {
    await this.findById(id);

    try {
      return this.heroRepository.delete(id);
    } catch {
      throw new BadRequestException(
        'Houve um problema ao excluir o herói, tente novamente!',
      );
    }
  }

  async findAll(query: IQuery): Promise<IPagination<HeroEntity>> {
    return this.heroRepository.findAll({
      ...query,
      limit: Number(query.limit) || 10,
      page: Number(query.page) || 1,
    });
  }
}
