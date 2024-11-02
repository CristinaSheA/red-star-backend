import { Test, TestingModule } from '@nestjs/testing';
import { CandiesService } from './candies.service';

describe('CandiesService', () => {
  let service: CandiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandiesService],
    }).compile();

    service = module.get<CandiesService>(CandiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
