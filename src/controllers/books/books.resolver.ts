import { CreateBookInput } from '@/dto/input-book.input';
import { BooksService } from '@/services/books.service';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BookDto } from './dto/book.dto';
import { CommentDto } from '../comment/dto/comment.dto';

@Resolver(() => BookDto)
export class BookResolver {
  constructor(private readonly bookService: BooksService) {}

  @Query(() => Array(BookDto))
  async getBooks(): Promise<BookDto[]> {
    return await this.bookService.readAllBooks();
  }

  @Query(() => BookDto)
  async getBook(@Args('bookId') id: number): Promise<BookDto> {
    return await this.bookService.findBook(id);
  }

  @ResolveField(() => [CommentDto])
  async comments(@Parent() { id: bookId }: BookDto) {
    console.log({ bookId });
    return [];
  }

  @Mutation(() => BookDto)
  async createBook(@Args('input') input: CreateBookInput): Promise<BookDto> {
    return await this.bookService.create(input);
  }
}
