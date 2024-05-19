import { BookDto } from '@/resolver/books/dto/book.dto';
import { CreateBookInput } from '@/dto/input-book.input';
import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async readAllBooks(): Promise<BookDto[]> {
    return await this.prismaService.book.findMany({
      orderBy: [{ id: 'asc' }],
    });
  }

  async findBook(id: number): Promise<BookDto> {
    // return await this.bookRepository.findOneById(id);
    const result = await this.prismaService.book
      .findFirst({ where: { id } })
      .then((res) => (res == null ? null : new BookDto(res)));
    return result;
  }

  async create(data: CreateBookInput) {
    const createdBook = this.prismaService.book
      .create({
        data: {
          title: data.title,
          content: data.content,
          price: data.price,
        },
      })
      .then((r) => new BookDto(r));
    return createdBook;
  }
}
