import type { Comment as PrismaComment } from '@prisma/client';
import { Comment } from '@/libs/domain/comment/comment.entity';

export const commentRecordToEntity = (resource: PrismaComment): Comment => {
  return {
    id: resource.id,
    content: resource.content,
    bookId: resource.bookId,
    createdAt: resource.createdAt,
    updatedAt: resource.updatedAt,
  };
};
