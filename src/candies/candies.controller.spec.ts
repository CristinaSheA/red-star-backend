import { Test, TestingModule } from '@nestjs/testing';
import { CandiesController } from './candies.controller';
import { CandiesService } from './candies.service';

describe('CandiesController', () => {
  let controller: CandiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandiesController],
      providers: [CandiesService],
    }).compile();

    controller = module.get<CandiesController>(CandiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
