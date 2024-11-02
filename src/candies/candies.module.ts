import { Module } from '@nestjs/common';
import { CandiesService } from './candies.service';
import { CandiesController } from './candies.controller';
import { Candy } from './entities/candy.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CandiesController],
  providers: [CandiesService],
  imports: [TypeOrmModule.forFeature([Candy])],
  exports: [TypeOrmModule],
})
export class CandiesModule {}
