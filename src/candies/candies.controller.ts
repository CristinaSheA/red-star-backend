import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandiesService } from './candies.service';
import { CreateCandyDto } from './dto/create-candy.dto';
import { UpdateCandyDto } from './dto/update-candy.dto';

@Controller('candies')
export class CandiesController {
  constructor(private readonly candiesService: CandiesService) {}

  @Post()
  create(@Body() createCandyDto: CreateCandyDto) {
    return this.candiesService.create(createCandyDto);
  }

  @Get()
  findAll() {
    return this.candiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandyDto: UpdateCandyDto) {
    return this.candiesService.update(+id, updateCandyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candiesService.remove(+id);
  }
}
