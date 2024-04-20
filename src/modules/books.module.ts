import { BooksResolver } from '@/controllers/books/books.resolver';
import { BookModel } from '@/models/book.model';
import { BooksService } from '@/services/books.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BookModel])],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
