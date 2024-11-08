import { Injectable } from '@nestjs/common';
import { DaysService } from 'src/days/days.service';
import { initialData } from './data/seed-data';
import { ActivitiesService } from 'src/activities/activities.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly daysService: DaysService,
    private readonly activitiesService: ActivitiesService,
  ) {}

  public async runSeed() {
    await this.insertNewDays()
    await this.insertNewActivities()
    return 'SEED EXECUTED';
  }

  private async insertNewDays() {
    await this.daysService.deleteAllDays();

    const days = initialData.days;

    const insertPromises = [];
    days.forEach((day) => {
      return insertPromises.push(this.daysService.create(day));
    });
    await Promise.all(insertPromises);
    return true;
  }
  private async insertNewActivities() {
    await this.activitiesService.deleteAllActivities();

    const activities = initialData.activities;

    const insertPromises = [];
    activities.forEach((activity) => {
      return insertPromises.push(this.activitiesService.create(activity));
    });
    await Promise.all(insertPromises);
    return true;
  }
}
