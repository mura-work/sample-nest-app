import { Todo } from './todo.entity';

export abstract class ITodoRepository {
  abstract findById(id: string): Promise<Todo | null>;
}
