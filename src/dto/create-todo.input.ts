import { TodoStatus } from '@/models/todos.model';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoInput {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(TodoStatus)
  @IsNotEmpty()
  status: TodoStatus;
}
