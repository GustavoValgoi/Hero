import { IPagination } from 'src/interfaces/pagination.interface';
import { HeroEntity } from '../entities/hero.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

export const paginationSwaggerMock: IPagination<HeroEntity> = {
  count: 1,
  limit: 10,
  page: 1,
  total_pages: 1,
  data: [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      name: 'Clark Kent',
      nickname: 'Superman',
      date_of_birth: new Date('1978-06-18'),
      universe: 'DC Comics',
      main_power: 'Super força, visão de raio-x, voo',
      avatar_url: 'https://meusite.com/imagens/superman.png',
      is_active: true,
      created_at: new Date('2024-04-18T15:00:00.000Z'),
      updated_at: new Date('2024-04-18T15:10:00.000Z'),
    },
  ],
};

export const deleteBadSwaggerMock = {
  statusCode: HttpStatus.BAD_REQUEST,
  message: 'Houve um problema ao excluir o herói, tente novamente!',
  error: 'Bad Request',
};

export const updateBadSwaggerMock = {
  statusCode: HttpStatus.BAD_REQUEST,
  message:
    'Houve um problema ao atualizar o herói, verifique os dados e tente novamente!',
  error: 'Bad Request',
};

export const createBadSwaggerMock = {
  statusCode: HttpStatus.BAD_REQUEST,
  message:
    'Houve um problema ao criar o herói, verifique os dados e tente novamente!',
  error: 'Bad Request',
};

export const heroNotFoundSwaggerMock = {
  statusCode: HttpStatus.NOT_FOUND,
  message: 'Herói não encontrado!',
  error: 'Not Found',
};
