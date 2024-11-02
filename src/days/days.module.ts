import { Module } from '@nestjs/common';
import { DaysService } from './days.service';
import { DaysController } from './days.controller';
import { Day } from './entities/day.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DaysController],
  providers: [DaysService],
  imports: [TypeOrmModule.forFeature([Day])],
  exports: [TypeOrmModule, DaysModule, DaysService],
})
export class DaysModule {}
