import { IsString, MinLength } from "class-validator";

export class CreateActivityDto {
  @IsString()
  @MinLength(2)
  name: string;
}
