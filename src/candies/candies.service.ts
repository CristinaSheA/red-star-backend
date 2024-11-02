import { Injectable } from '@nestjs/common';
import { CreateCandyDto } from './dto/create-candy.dto';
import { UpdateCandyDto } from './dto/update-candy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candy } from './entities/candy.entity';

@Injectable()
export class CandiesService {
  constructor(
    @InjectRepository(Candy)
    private readonly candiesRepository: Repository<Candy>,
  ) {}

  public async create(createCandyDto: CreateCandyDto) {
    const newCandy = this.candiesRepository.create({
      ...createCandyDto,
    });
    return await this.candiesRepository.save(newCandy);
  }
  public async findAll() {
    return await this.candiesRepository.find();
  }
  public async findOne(id: number) {
    return await this.candiesRepository.findOneBy({ id: id });
  }
  public async update(id: number, updateCandyDto: UpdateCandyDto) {
    const candy = await this.candiesRepository.preload({
      ...updateCandyDto,
      id,
    });
    return await this.candiesRepository.save(candy);
  }
  public async remove(id: number) {
    return await this.candiesRepository.delete(id);
  }
}
