import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateHeroDto } from '../dtos/create.dto';
import { HeroEntity } from '../entities/hero.entity';
import { UpdateHeroDto } from '../dtos/update.dto';
import { IQuery } from '../../interfaces/query.interface';
import { IPagination } from '../../interfaces/pagination.interface';

/**
 * Repositório responsável por executar operações de acesso a dados
 * relacionados à entidade Hero, utilizando Prisma como ORM.
 */
@Injectable()
export class HeroRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Cria um novo herói no banco de dados.
   *
   * @param body - Dados do herói a ser criado.
   * @returns O herói criado.
   */
  async create(body: CreateHeroDto): Promise<HeroEntity> {
    return this.prisma.hero.create({
      data: body,
    });
  }

  /**
   * Atualiza os dados de um herói existente.
   *
   * @param id - ID do herói a ser atualizado.
   * @param body - Novos dados para o herói.
   * @returns O herói atualizado.
   */
  async update(id: string, body: UpdateHeroDto): Promise<HeroEntity> {
    return this.prisma.hero.update({
      where: { id },
      data: body,
    });
  }

  /**
   * Busca um herói pelo ID.
   *
   * @param id - ID do herói.
   * @returns O herói encontrado ou null se não existir.
   */
  async findById(id: string): Promise<HeroEntity | null> {
    return this.prisma.hero.findFirst({
      where: { id },
    });
  }

  /**
   * Remove um herói do banco de dados com base no ID.
   *
   * @param id - ID do herói a ser removido.
   * @returns O herói que foi deletado.
   */
  async delete(id: string): Promise<HeroEntity> {
    return this.prisma.hero.delete({
      where: { id },
    });
  }

  /**
   * Lista heróis com paginação e opção de busca por nome ou apelido.
   *
   * @param query - Parâmetros de paginação e busca.
   * @returns Um objeto contendo os heróis, total de páginas e contagem.
   */
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
      orderBy: { created_at: 'desc' },
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
