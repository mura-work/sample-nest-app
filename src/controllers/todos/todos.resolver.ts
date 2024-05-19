import { TodoApplicationService } from '@/application-service/todo/todo.application-service';
import { Todo } from '@/libs/domain/todo/todo.entity';
import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { TodoDto } from './dto/todo.dto';
import { TodosFilter, TodosFilterDto } from './dto/todos-filter.dto';
import type { ReadonlyDeep } from 'type-fest';
import { TodosQueryService } from '@/query-service/todo.query-service';

@Resolver()
export class TodosResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly todoApplicationService: TodoApplicationService,
    private readonly todosQueryService: TodosQueryService,
  ) {}

  @Query(() => Array(TodoDto))
  async todos(
    @Args('filter', { type: () => TodosFilterDto, nullable: true })
    filter: ReadonlyDeep<TodosFilter>,
  ): Promise<Todo[]> {
    // const todoList = await this.prisma.todo.findMany();
    // return todoList.map((r) => todoRecordToEntity(r));

    const todoList = await this.todosQueryService.execute({
      ...filter,
    });

    return todoList.map((user) => new TodoDto(user));
  }

  @Query(() => TodoDto, { nullable: true })
  async todo(@Args('todoId') id: string): Promise<Todo> {
    return await this.todoApplicationService.findById(id);
  }
}
