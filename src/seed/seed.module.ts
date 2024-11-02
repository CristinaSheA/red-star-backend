import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { DaysModule } from 'src/days/days.module';
import { DaysService } from 'src/days/days.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Day } from 'src/days/entities/day.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [DaysModule]
})
export class SeedModule {}
