import { Book } from './book.entity';

export abstract class IBookRepository {
  abstract update(book: Book): Promise<Book>;
}
