import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroEntity } from './entities/hero.entity';
import { CreateHeroDto } from './dtos/create.dto';
import { UpdateHeroDto } from './dtos/update.dto';
import { IQuery } from '../interfaces/query.interface';
import { IPagination } from '../interfaces/pagination.interface';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import {
  createBadSwaggerMock,
  deleteBadSwaggerMock,
  heroNotFoundSwaggerMock,
  paginationSwaggerMock,
  updateBadSwaggerMock,
} from './__mocks__/hero.swagger.mock';

/**
 * Controller responsável por lidar com as rotas relacionadas aos heróis.
 * Utiliza o HeroService para executar as operações lógicas e regra de negócio.
 */
@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  /**
   * Cria um novo herói.
   *
   * @param body - Objeto contendo os dados do herói (CreateHeroDto).
   * @returns O herói criado.
   * @throws BadRequestException - Se ocorrer algum erro durante a criação.
   */
  @Post()
  @ApiOperation({ summary: 'Cria um novo herói' })
  @ApiCreatedResponse({ type: HeroEntity })
  @ApiBadRequestResponse({ example: createBadSwaggerMock })
  async create(@Body() body: CreateHeroDto): Promise<HeroEntity> {
    return this.heroService.create(body);
  }

  /**
   * Lista os heróis com suporte à paginação e busca.
   *
   * @param query - Parâmetros 'search', 'limit' e 'page' (IQuery).
   * @returns Uma lista paginada de heróis.
   */
  @Get()
  @ApiOperation({ summary: 'Lista os heróis com paginação e retorno de busca' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiOkResponse({ example: paginationSwaggerMock })
  async findAll(@Query() query: IQuery): Promise<IPagination<HeroEntity>> {
    return this.heroService.findAll(query);
  }

  /**
   * Retorna os dados de um herói específico com base no ID.
   *
   * @param id - O ID do herói a ser buscado.
   * @returns O herói encontrado.
   * @throws NotFoundException - Se o herói não for encontrado.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Busca um herói pelo ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({ type: HeroEntity })
  @ApiNotFoundResponse({ example: heroNotFoundSwaggerMock })
  async findById(@Param('id') id: string): Promise<HeroEntity> {
    return this.heroService.findById(id);
  }

  /**
   * Busca e Atualiza um herói por ID.
   *
   * @param id - O ID do herói a ser atualizado.
   * @param body - Os novos dados do herói (UpdateHeroDto).
   * @returns O herói atualizado.
   * @throws NotFoundException - Se o herói não for encontrado.
   * @throws BadRequestException - Se os dados forem inválidos ou houver erro na atualização.
   */
  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um herói pelo ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({ type: HeroEntity })
  @ApiNotFoundResponse({ example: heroNotFoundSwaggerMock })
  @ApiBadRequestResponse({ example: updateBadSwaggerMock })
  async update(
    @Param('id') id: string,
    @Body() body: UpdateHeroDto,
  ): Promise<HeroEntity> {
    return this.heroService.update(id, body);
  }

  /**
   * Exclui um herói do sistema por ID.
   *
   * @param id - O ID do herói a ser removido.
   * @returns O herói que foi excluído.
   * @throws NotFoundException - Se o herói não for encontrado.
   * @throws BadRequestException - Se ocorrer um erro durante a exclusão.
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Exclui um herói pelo ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({ type: HeroEntity })
  @ApiNotFoundResponse({ example: heroNotFoundSwaggerMock })
  @ApiBadRequestResponse({ example: deleteBadSwaggerMock })
  async delete(@Param('id') id: string): Promise<HeroEntity> {
    return this.heroService.delete(id);
  }
}
