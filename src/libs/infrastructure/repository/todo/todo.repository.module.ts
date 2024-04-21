import { Module } from '@nestjs/common';
import { ITodoRepository } from '../../../domain/todo/todo.repository.interface';
import { TodoRepository } from './todo.repository';

const providers = [
  {
    provide: ITodoRepository,
    useClass: TodoRepository,
  },
];

@Module({
  providers: [...providers],
  exports: providers.map((p) => p.provide),
})
export class TodoRepositoryModule {}
