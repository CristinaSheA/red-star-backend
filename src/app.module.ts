import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandiesModule } from './candies/candies.module';
import { DaysModule } from './days/days.module';
import { ActivitiesModule } from './activities/activities.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CandiesModule, DaysModule, ActivitiesModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
