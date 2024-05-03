import { ICommentRepository } from '@/libs/domain/comment/comment.repository.interface';
import { CommentRepository } from './comment.repository';
import { Module } from '@nestjs/common';

const providers = [
  {
    provide: ICommentRepository,
    useClass: CommentRepository,
  },
];

@Module({
  providers: [...providers],
  exports: providers.map((p) => p.provide),
})
// @Module({
//   imports: [CommentRepository, ICommentRepository],
//   providers: [CommentRepository, CommentRepository],
//   exports: [CommentRepository],
// })
export class CommentRepositoryModule {}
