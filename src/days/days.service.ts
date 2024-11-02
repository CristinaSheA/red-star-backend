import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateDayDto } from './dto/create-day.dto';
import { UpdateDayDto } from './dto/update-day.dto';
import { Day } from './entities/day.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DaysService {
  constructor(
    @InjectRepository(Day)
    private readonly daysRepository: Repository<Day>,
  ) {}

  public async create(CreatedayDto: CreateDayDto): Promise<Day> {
    const newDay = this.daysRepository.create({ ...CreatedayDto });
    return await this.daysRepository.save(newDay);
  }
  public async findAll() {
    return await this.daysRepository.find();
  }
  public async deleteAllDays() {
    const query = this.daysRepository.createQueryBuilder('product');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    // this.logger.error(error);
    console.log(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
