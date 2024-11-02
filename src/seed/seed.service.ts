import { Injectable } from '@nestjs/common';
import { DaysService } from 'src/days/days.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(
    private readonly daysService: DaysService,
  ) {}

  public async runSeed() {
    await this.insertNewDays()
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
}
