import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTodoInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
