import { IsString, MinLength, IsNumber, Min, Max } from "class-validator";

export class CreateCandyDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  quantity: number;
}
