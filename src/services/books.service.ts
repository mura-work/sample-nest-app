import { BookDto } from '@/controllers/books/dto/book.dto';
import { CreateBookInput } from '@/dto/input-book.input';
import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { BookModel } from '@/models/book.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    private readonly prismaService: PrismaService,
    @InjectRepository(BookModel)
    private readonly bookRepository: Repository<BookModel>,
  ) {}

  async readAllBooks(): Promise<BookModel[]> {
    return await this.bookRepository.find();
  }

  async findBook(id: number): Promise<BookDto> {
    // return await this.bookRepository.findOneById(id);
    const result = await this.prismaService.book
      .findFirst({ where: { id } })
      .then((res) =>
        res == null ? null : new BookDto(res as unknown as BookModel),
      );
    return result;
  }

  async create(data: CreateBookInput): Promise<BookModel> {
    const book = new BookModel();
    book.title = data.title;
    book.content = data.content;
    book.price = data.price;
    const createdBook = this.bookRepository.create(book);
    await this.bookRepository.save(book);
    return createdBook;
  }
}
