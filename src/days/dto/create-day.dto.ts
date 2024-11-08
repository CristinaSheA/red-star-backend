import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateDayDto {
  @IsNumber()
  @IsPositive()
  dayNum: number;

  @IsString()
  @MinLength(10)
  factText: string;

  @IsString()
  @MinLength(1)
  image: string;

}
