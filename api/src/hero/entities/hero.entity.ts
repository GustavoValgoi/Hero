import { ApiProperty } from '@nestjs/swagger';
import { Hero } from 'generated/prisma';

export class HeroEntity implements Hero {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'ID único do herói (UUID)',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({ example: 'Clark Kent', description: 'Nome do herói' })
  name: string;

  @ApiProperty({ example: 'Superman', description: 'Apelido ou codinome' })
  nickname: string;

  @ApiProperty({ example: '1978-06-18', description: 'Data de nascimento' })
  date_of_birth: Date;

  @ApiProperty({ example: 'DC Comics', description: 'Universo do herói' })
  universe: string;

  @ApiProperty({
    example: 'Super força, visão de raio-x, voo',
    description: 'Poder principal',
  })
  main_power: string;

  @ApiProperty({
    example: 'https://meusite.com/imagens/superman.png',
    description: 'Avatar',
  })
  avatar_url: string;

  @ApiProperty({ example: true, description: 'Herói está ativo?' })
  is_active: boolean;

  @ApiProperty({
    example: '2024-04-18T15:00:00.000Z',
    description: 'Criado em',
  })
  created_at: Date;

  @ApiProperty({
    example: '2024-04-18T15:10:00.000Z',
    description: 'Atualizado em',
  })
  updated_at: Date;
}
