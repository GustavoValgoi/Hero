import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { HeroRepository } from './repositories/hero.repository';
import { CreateHeroDto } from './dtos/create.dto';
import { UpdateHeroDto } from './dtos/update.dto';
import { HeroEntity } from './entities/hero.entity';
import { IPagination } from '../interfaces/pagination.interface';
import { IQuery } from '../interfaces/query.interface';

/**
 * A camada HeroService é responsável por realizar todas as operações lógicas relacionadas aos heróis .
 * Ele interage diretamente com o HeroRepository que é a camada responsável por executar as operações no banco de dados.
 */
@Injectable()
export class HeroService {
  constructor(private readonly heroRepository: HeroRepository) {}

  /**
   * Método responsável por criar um novo herói no banco de dados.
   *
   * @param body - Os dados do herói a serem criados.
   * @returns O herói recém-criado.
   * @throws BadRequestException caso haja um erro durante a criação.
   */
  async create(body: CreateHeroDto): Promise<HeroEntity> {
    return this.heroRepository
      .create({
        ...body,
        date_of_birth: new Date(body.date_of_birth),
      })
      .then(response => response)
      .catch(() => {
        throw new BadRequestException(
          'Houve um problema ao criar o herói, verifique os dados e tente novamente!',
        );
      });
  }

  /**
   * Método responsável pela atualização das informações de um herói existente.
   *
   * @param id - O ID do herói a ser atualizado no formato UUID.
   * @param body - Pode ser enviado um ou mais dados.
   * @returns O herói atualizado.
   * @throws BadRequestException caso haja um erro durante a atualização.
   * @throws NotFoundException caso o herói com o ID informado não seja encontrado.
   */
  async update(id: string, body: UpdateHeroDto): Promise<HeroEntity> {
    await this.findById(id);

    if (body.date_of_birth) {
      body.date_of_birth = new Date(body.date_of_birth);
    }

    return this.heroRepository
      .update(id, body)
      .then(response => response)
      .catch(() => {
        throw new BadRequestException(
          'Houve um problema ao atualizar o herói, verifique os dados e tente novamente!',
        );
      });
  }

  /**
   * Método responsável pela busca de um herói pelo ID.
   *
   * @param id - O ID do herói a ser encontrado.
   * @returns O herói encontrado.
   * @throws NotFoundException caso o herói com o ID informado não seja encontrado.
   */
  async findById(id: string): Promise<HeroEntity> {
    const hero = await this.heroRepository.findById(id);

    if (!hero) {
      throw new NotFoundException('Herói não encontrado!');
    }

    return hero;
  }

  /**
   * Método responsável pela exclusão de um herói pelo ID.
   *
   * @param id - O ID do herói a ser excluído.
   * @returns O herói excluído.
   * @throws BadRequestException caso haja um erro durante a exclusão.
   * @throws NotFoundException caso o herói com o ID informado não seja encontrado.
   */
  async delete(id: string): Promise<HeroEntity> {
    await this.findById(id);

    return this.heroRepository
      .delete(id)
      .then(response => response)
      .catch(() => {
        throw new BadRequestException(
          'Houve um problema ao excluir o herói, tente novamente!',
        );
      });
  }

  /**
   * Método responsável pela lista dos heróis com paginação e busca.
   *
   * @param query - Objeto contendo os parâmetros de consulta (como 'limit', 'page' e 'search').
   * @returns Objeto com as informações para paginação e o 'data' com os heróis.
   */
  async findAll(query: IQuery): Promise<IPagination<HeroEntity>> {
    return this.heroRepository.findAll({
      ...query,
      limit: Number(query.limit) || 10,
      page: Number(query.page) || 1,
    });
  }
}
