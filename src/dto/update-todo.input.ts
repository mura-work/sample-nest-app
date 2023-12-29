import { TodoStatus } from '@/models/todos.model';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTodoInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus;
}
