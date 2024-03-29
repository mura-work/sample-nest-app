import { CreateTodoInput } from '@/dto/create-todo.input';
import { UpdateTodoInput } from '@/dto/update-todo.input';
import { TodosModel } from '@/models/todos.model';
import { TodosService } from '@/services/todos.service';
// eslint-disable-next-line prettier/prettier
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';

@Controller('api/v1')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get('/todos')
  readAllTodos(): Promise<TodosModel[]> {
    return this.todoService.readAllTodos();
  }

  @Get('/todo/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.todoService.findOneById(id);
    return data;
  }

  @Post()
  async createTodo(@Body() input: CreateTodoInput): Promise<InsertResult> {
    return this.todoService.createTodo(input);
  }

  @Put()
  async updateTodo(@Body() input: UpdateTodoInput): Promise<UpdateResult> {
    return this.todoService.updateTodo(input);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<DeleteResult> {
    return this.todoService.deleteTodo(id);
  }
}
