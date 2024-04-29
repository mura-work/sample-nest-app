import { commentRecordToEntity } from '@/libs/domain/comment/record-to-entity';
import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class CommentQueryService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute() {
    const result = await this.prismaService.comment
      .findMany({
        orderBy: {
          createdAt: 'asc',
        },
      })
      .then((result) => result.map((r) => commentRecordToEntity(r)));
    return result;
  }
}
