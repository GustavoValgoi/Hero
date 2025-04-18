import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHeroDto {
  @ApiProperty({
    example: 'Clark Kent',
    description: 'Nome real do herói',
  })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString({ message: 'O formato do nome é inválido.' })
  name: string;

  @ApiProperty({
    example: 'Superman',
    description: 'Apelido ou codinome do herói',
  })
  @IsNotEmpty({ message: 'O apelido é obrigatório.' })
  @IsString({ message: 'O formato do apelido é inválido.' })
  nickname: string;

  @ApiProperty({
    example: '1978-06-18',
    description: 'Data de nascimento do herói (formato ISO)',
  })
  @IsNotEmpty({ message: 'A data de nascimento é obrigatória.' })
  @IsDateString()
  date_of_birth: Date;

  @ApiProperty({
    example: 'DC Comics',
    description: 'Universo ao qual o herói pertence',
  })
  @IsNotEmpty({ message: 'O universo é obrigatório.' })
  @IsString({ message: 'O formato do universo é inválido.' })
  universe: string;

  @ApiProperty({
    example: 'Super força, visão de raio-x, voo',
    description: 'Habilidade principal do herói',
  })
  @IsNotEmpty({ message: 'A habilidade é obrigatória.' })
  @IsString({ message: 'O formato da habilidade é inválido.' })
  main_power: string;

  @ApiProperty({
    example: 'https://meusite.com/imagens/superman.png',
    description: 'URL do avatar do herói',
  })
  @IsNotEmpty({ message: 'O link do avatar é obrigatório.' })
  @IsString({ message: 'O formato do avatar é inválido.' })
  avatar_url: string;

  @ApiProperty({
    example: true,
    description: 'Indica se o herói está ativo',
  })
  @IsNotEmpty({ message: 'O status é obrigatório.' })
  @IsBoolean()
  is_active: boolean;
}
