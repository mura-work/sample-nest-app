import { CommentDto } from '@/resolver/comment/dto/comment.dto';

export abstract class ICommentRepository {
  abstract create(content: string, bookId: number): Promise<CommentDto>;
  abstract findManyByBookIds(bookIds: number[]);
}
