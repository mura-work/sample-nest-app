import { CreateBookInput } from '@/dto/input-book.input';
import { BookModel } from '@/models/book.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookModel)
    private readonly bookRepository: Repository<BookModel>,
  ) {}

  async readAllBooks(): Promise<BookModel[]> {
    return await this.bookRepository.find();
  }

  async findBook(id: number): Promise<BookModel> {
    return await this.bookRepository.findOneById(id);
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
