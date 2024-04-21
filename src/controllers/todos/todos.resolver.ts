import { TodoApplicationService } from '@/application-service/todo/todo.application-service';
import { Todo } from '@/libs/domain/todo/todo.entity';
import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { todoRecordToEntity } from '@/libs/infrastructure/repository/todo/record-to-entity';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { TodoDto } from './dto/todo.dto';

@Resolver()
export class TodosResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly todoApplicationService: TodoApplicationService,
  ) {}

  @Query(() => Array(TodoDto))
  async getTodos(): Promise<Todo[]> {
    const todoList = await this.prisma.todo.findMany();
    return todoList.map((r) => todoRecordToEntity(r));
  }

  @Query((returns) => TodoDto, { nullable: true })
  async getTodo(@Args('todoId') id: string): Promise<Todo> {
    return await this.todoApplicationService.findById(id);
  }
}
