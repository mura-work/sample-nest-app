import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
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
  async getTodos(): Promise<TodosModel[]> {
    const todoList = await this.prisma.todo.findMany();
    console.log(todoList);
    // return await this.todoService.readAllTodos();
    return todoList;
  }

  @Query((returns) => TodosModel)
  async getTodo(@Args('todoId') id: string): Promise<TodosModel> {
    return await this.todoService.findOneById(id);
  }
}
