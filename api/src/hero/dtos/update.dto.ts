import { PartialType } from '@nestjs/swagger';
import { CreateHeroDto } from './create.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateHeroDto extends PartialType(CreateHeroDto) {
  @ApiPropertyOptional({
    example: 'Clark Kent',
    description: 'Nome real do herói',
  })
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: 'Superman',
    description: 'Apelido ou codinome do herói',
  })
  @IsOptional()
  nickname?: string;

  @ApiPropertyOptional({
    example: '1978-06-18',
    description: 'Data de nascimento do herói (formato ISO)',
  })
  @IsOptional()
  date_of_birth?: Date;

  @ApiPropertyOptional({
    example: 'DC Comics',
    description: 'Universo ao qual o herói pertence',
  })
  @IsOptional()
  universe?: string;

  @ApiPropertyOptional({
    example: 'Super força, visão de raio-x, voo',
    description: 'Habilidade principal do herói',
  })
  @IsOptional()
  main_power?: string;

  @ApiPropertyOptional({
    example: 'https://meusite.com/imagens/superman.png',
    description: 'URL do avatar do herói',
  })
  @IsOptional()
  avatar_url?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Indica se o herói está ativo',
  })
  @IsOptional()
  is_active?: boolean;
}
