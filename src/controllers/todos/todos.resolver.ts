import { TodosModel } from '@/models/todos.model';
import { TodosService } from '@/services/todos.service';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TodosResolver {
  constructor(private readonly todoService: TodosService) {}

  @Query(() => Array(TodosModel))
  async getTodos(): Promise<TodosModel[]> {
    return await this.todoService.readAllTodos();
  }

  @Query((returns) => TodosModel)
  async getTodo(@Args('todoId') id: string): Promise<TodosModel> {
    return await this.todoService.findOneById(id);
  }
}
