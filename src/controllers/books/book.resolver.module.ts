import { Module } from '@nestjs/common';
import { BookResolver } from './books.resolver';
import { BookServiceModule } from '@/services/book.service.module';
import { CommentDataLoaderModule } from '@/libs/infrastructure/data-loader/comments/comment.dataloader.module';

@Module({
  imports: [BookServiceModule, CommentDataLoaderModule],
  providers: [BookResolver],
})
export class BookResolverModule {}
