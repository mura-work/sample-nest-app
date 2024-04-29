import { CommentRepository } from './comment.repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [CommentRepository],
  exports: [CommentRepository],
})
export class CommentRepositoryModule {}
