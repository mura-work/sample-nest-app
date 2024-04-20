import { CreateTodoInput } from '@/dto/create-todo.input';
import { UpdateTodoInput } from '@/dto/update-todo.input';
import { TodosModel } from '@/models/todos.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosModel)
    private readonly todosRepository: Repository<TodosModel>,
  ) {}

  async readAllTodos(): Promise<TodosModel[]> {
    const selectedTodos = await this.todosRepository.find();
    return selectedTodos;
  }

  async findOneById(id: string): Promise<TodosModel> {
    const todo = await this.todosRepository.findOne({ where: { id } });
    return todo;
  }

  async createTodo(input: CreateTodoInput): Promise<InsertResult> {
    const createdTodos = await this.todosRepository.insert(input);
    return createdTodos;
  }

  async updateTodo(input: UpdateTodoInput): Promise<UpdateResult> {
    const updatedTodo = await this.todosRepository.update(input.id, input);
    return updatedTodo;
  }

  async deleteTodo(todoId: string): Promise<DeleteResult> {
    const deletedTodo = await this.todosRepository.delete(todoId);
    return deletedTodo;
  }
}
