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
    console.log({ result });
    return result;
  }
}
