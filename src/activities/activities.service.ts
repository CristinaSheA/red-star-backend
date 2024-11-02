import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private readonly activitiesRepository: Repository<Activity>,
  ) {}

  public async create(createActivityDto: CreateActivityDto) {
    const newActivity = await this.activitiesRepository.create({
      ...createActivityDto,
    });
    return await this.activitiesRepository.save(newActivity);
  }
  public async findAll() {
    return await this.activitiesRepository.find();
  }
  public async findOne(id: number) {
    return await this.activitiesRepository.findOneBy({ id: id });
  }
  public async update(id: number, updateActivityDto: UpdateActivityDto) {
    const activity = await this.activitiesRepository.preload({
      ...updateActivityDto,
      id,
    });
    return await this.activitiesRepository.save(activity);
  }
  public async remove(id: number) {
    return await this.activitiesRepository.delete(id);
  }
}
