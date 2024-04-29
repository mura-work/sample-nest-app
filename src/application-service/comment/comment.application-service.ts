import { CommentRepository } from '@/libs/infrastructure/repository/comment/comment.repository';
import { Injectable } from '@nestjs/common';
import { CommentCreateInput } from './comment.application-service.type';

@Injectable()
export class CommentApplicationService {
  constructor(private readonly commentRepository: CommentRepository) {}

  async create(input: CommentCreateInput) {
    const { content, bookId } = input;
    const result = this.commentRepository.create(content, bookId);
    return result;
  }
}
