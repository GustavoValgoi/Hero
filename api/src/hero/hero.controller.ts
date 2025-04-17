import {
  Body,
  Controller,
  Delete,
  Get,
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

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  async create(@Body() body: CreateHeroDto): Promise<HeroEntity> {
    return this.heroService.create(body);
  }

  @Get()
  async findAll(@Query() query: IQuery): Promise<IPagination<HeroEntity>> {
    return this.heroService.findAll(query);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateHeroDto,
  ): Promise<HeroEntity> {
    return this.heroService.update(id, body);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<HeroEntity> {
    return this.heroService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<HeroEntity> {
    return this.heroService.delete(id);
  }
}
