import { Todo } from '@/libs/domain/todo/todo.entity';
import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { todoRecordToEntity } from '@/libs/infrastructure/repository/todo/record-to-entity';
import { TodosModel } from '@/models/todos.model';
import { TodosService } from '@/services/todos.service';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TodosResolver {
  constructor(
    private readonly todoService: TodosService,
    private readonly prisma: PrismaService,
  ) {}

  @Query(() => Array(TodosModel))
  async getTodos(): Promise<Todo[]> {
    const todoList = await this.prisma.todo.findMany();
    return todoList.map((r) => todoRecordToEntity(r));
  }

  @Query((returns) => TodosModel)
  async getTodo(@Args('todoId') id: string): Promise<TodosModel> {
    return await this.todoService.findOneById(id);
  }
}
