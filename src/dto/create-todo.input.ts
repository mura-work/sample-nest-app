import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoInput {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
