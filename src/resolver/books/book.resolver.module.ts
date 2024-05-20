import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { CommentDataLoaderModule } from '@/libs/infrastructure/data-loader/comments/comment.dataloader.module';
import { BookApplicationServiceModule } from '@/application-service/book/book.application-service.module';

@Module({
  imports: [BookApplicationServiceModule, CommentDataLoaderModule],
  providers: [BookResolver],
})
export class BookResolverModule {}
