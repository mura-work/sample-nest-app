import { Book } from './book.entity';

export abstract class IBookRepository {
  abstract update(id: number, title: string, content: string): Promise<Book>;
}
