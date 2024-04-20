import { CreateBookInput } from '@/dto/input-book.input';
import { BookModel } from '@/models/book.model';
import { BooksService } from '@/services/books.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BooksResolver {
  constructor(private readonly bookService: BooksService) {}

  @Query(() => Array(BookModel))
  async getBooks(): Promise<BookModel[]> {
    return await this.bookService.readAllBooks();
  }

  @Query((returns) => BookModel)
  async getBook(@Args('bookId') id: number): Promise<BookModel> {
    return await this.bookService.findBook(id);
  }

  @Mutation(() => BookModel)
  async createBook(@Args('input') input: CreateBookInput): Promise<BookModel> {
    return await this.bookService.create(input);
  }
}
