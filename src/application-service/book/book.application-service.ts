import { BookDto } from '@/resolver/books/dto/book.dto';
import { CreateBookInput } from '@/dto/input-book.input';
import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { Injectable } from '@nestjs/common';
import { BookRepository } from '@/libs/infrastructure/repository/book/book.repository';
import { UpdateBookInput } from './book.application-service.type';

@Injectable()
export class BookApplicationService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly repository: BookRepository,
  ) {}

  async readAllBooks(): Promise<BookDto[]> {
    return await this.prismaService.book.findMany({
      orderBy: [{ id: 'asc' }],
    });
  }

  async findBook(id: number): Promise<BookDto> {
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

  async update(input: UpdateBookInput) {
    const { id, title, content } = input;
    const targetBook = await this.findBook(id);
    if (targetBook == null) {
      return;
    }

    const updatedBook = this.repository.update({
      ...targetBook,
      title,
      content,
    });
    return updatedBook;
  }
}
