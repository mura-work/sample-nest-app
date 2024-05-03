import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ICommentRepository } from '@/libs/domain/comment/comment.repository.interface';
import { CommentDto } from '@/controllers/comment/dto/comment.dto';

@Injectable({ scope: Scope.DEFAULT })
export class CommentRepository implements ICommentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(content: string, bookId: number) {
    const result = this.prismaService.comment
      .create({
        data: {
          content,
          book: {
            connect: { id: bookId },
          },
        },
      })
      .then((r) => new CommentDto(r));
    return result;
  }

  async findManyByBookIds(bookIds: readonly number[]) {
    const commentsForBooks = await this.prismaService.comment.findMany({
      where: { bookId: { in: [...bookIds] } },
    });
    const result = bookIds.reduce((acc, bookId) => {
      acc[bookId] = commentsForBooks.filter(
        (comment) => comment.bookId === bookId,
      );
      return acc;
    }, {});

    return result;
  }
}
