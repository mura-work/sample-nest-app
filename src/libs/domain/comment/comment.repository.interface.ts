import { CommentDto } from '@/controllers/comment/dto/comment.dto';

export abstract class ICommentRepository {
  abstract create(content: string, bookId: number): Promise<CommentDto>;
}
