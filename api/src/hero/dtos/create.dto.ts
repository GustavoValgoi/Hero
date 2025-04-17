import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateHeroDto {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString({ message: 'O formato do nome é inválido.' })
  name: string;

  @IsNotEmpty({ message: 'O apelido é obrigatório.' })
  @IsString({ message: 'O formato do apelido é inválido.' })
  nickname: string;

  @IsNotEmpty({ message: 'A data de nascimento é obrigatória.' })
  @IsDateString()
  date_of_birth: Date;

  @IsNotEmpty({ message: 'O universo é obrigatório.' })
  @IsString({ message: 'O formato do universo é inválido.' })
  universe: string;

  @IsNotEmpty({ message: 'A habilidade é obrigatória.' })
  @IsString({ message: 'O formato da habilidade é inválido.' })
  main_power: string;

  @IsNotEmpty({ message: 'O link do avatar é obrigatório.' })
  @IsString({ message: 'O formato do avatar é inválido.' })
  avatar_url: string;

  @IsNotEmpty({ message: 'O status é obrigatório.' })
  @IsBoolean()
  is_active: boolean;
}
