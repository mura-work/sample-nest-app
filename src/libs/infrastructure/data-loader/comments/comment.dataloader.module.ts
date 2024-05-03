import { Module } from '@nestjs/common';
import { CommentsByBookIdDataLoader } from '@/libs/infrastructure/data-loader/comments/comments-by-book-id.dataloader';
import { CommentRepositoryModule } from '../../repository/comment/comment.repository.module';

@Module({
  imports: [CommentRepositoryModule],
  providers: [CommentsByBookIdDataLoader],
  exports: [CommentsByBookIdDataLoader],
})
export class CommentDataLoaderModule {}
