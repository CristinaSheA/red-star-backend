import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { DaysModule } from 'src/days/days.module';
import { ActivitiesModule } from 'src/activities/activities.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [DaysModule, ActivitiesModule]
})
export class SeedModule {}
