import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IBookRepository } from '@/libs/domain/book/book.repository.interface';
import { Book } from '@/libs/domain/book/book.entity';

@Injectable({ scope: Scope.DEFAULT })
export class BookRepository implements IBookRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async update(book: Book): Promise<Book> {
    if (!book.title || !book.content) {
      return;
    }

    const result = await this.prismaService.book
      .update({
        where: { id: book.id },
        data: {
          title: book.title,
          content: book.content,
        },
      })
      .then((r) => this.toEntity(r));
    return result;
  }

  private toEntity(resource): Book {
    return {
      id: resource.id,
      title: resource.title,
      content: resource.content,
      price: resource.price,
      createdAt: resource.createdAt,
      updatedAt: resource.updatedAt,
    };
  }
}
