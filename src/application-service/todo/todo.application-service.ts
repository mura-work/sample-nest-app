import { ITodoRepository } from '@/libs/domain/todo/todo.repository.interface';
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class TodoApplicationService {
  constructor(private readonly todoRepository: ITodoRepository) {}

  findById(id: string) {
    return this.todoRepository.findById(id);
  }
}
