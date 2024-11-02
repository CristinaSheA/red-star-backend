import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ActivitiesService {
  constructor(@InjectRepository(Activity) private readonly activitiesRepository: Repository<Activity>) {}

  public create(createActivityDto: CreateActivityDto) {
    const newActivity = this.activitiesRepository.create({...createActivityDto});
    return this.activitiesRepository.save(newActivity);
  }

  findAll() {
    return `This action returns all activities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
