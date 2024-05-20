import { IBookRepository } from '@/libs/domain/book/book.repository.interface';
import { BookRepository } from './book.repository';
import { Module } from '@nestjs/common';

const providers = [
  {
    provide: IBookRepository,
    useClass: BookRepository,
  },
];

@Module({
  providers: [...providers],
  exports: providers.map((p) => p.provide),
})
export class BookRepositoryModule {}
