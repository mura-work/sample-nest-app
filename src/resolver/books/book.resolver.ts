import { CreateBookInput } from '@/dto/input-book.input';
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
import { CommentsByBookIdDataLoader } from '@/libs/infrastructure/data-loader/comments/comments-by-book-id.dataloader';
import { BookApplicationService } from '@/application-service/book/book.application-service';

@Resolver(() => BookDto)
export class BookResolver {
  constructor(
    private readonly bookService: BookApplicationService,
    private readonly commentsByBookIdDataLoader: CommentsByBookIdDataLoader,
  ) {}

  @Query(() => Array(BookDto))
  async books(): Promise<BookDto[]> {
    return await this.bookService.readAllBooks();
  }

  @Query(() => BookDto)
  async book(@Args('bookId') id: number): Promise<BookDto> {
    return await this.bookService.findBook(id);
  }

  @ResolveField(() => [CommentDto])
  async comments(@Parent() { id: bookId }: BookDto) {
    const result = await this.commentsByBookIdDataLoader.load(String(bookId));
    return result.map((comment) => new CommentDto(comment));
  }

  @Mutation(() => BookDto)
  async createBook(@Args('input') input: CreateBookInput): Promise<BookDto> {
    return await this.bookService.create(input);
  }
}
