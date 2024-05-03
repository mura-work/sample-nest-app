import { Injectable } from '@nestjs/common';
import { CommentCreateInput } from './comment.application-service.type';
import { ICommentRepository } from '@/libs/domain/comment/comment.repository.interface';

@Injectable()
export class CommentApplicationService {
  constructor(private readonly commentRepository: ICommentRepository) {}

  async create(input: CommentCreateInput) {
    const { content, bookId } = input;
    const result = this.commentRepository.create(content, bookId);
    return result;
  }
}
