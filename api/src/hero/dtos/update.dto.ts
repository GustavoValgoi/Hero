import { PartialType } from '@nestjs/mapped-types';
import { CreateHeroDto } from './create.dto';

export class UpdateHeroDto extends PartialType(CreateHeroDto) {}
