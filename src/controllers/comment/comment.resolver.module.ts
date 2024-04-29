import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { commentQueryServiceModule } from '@/query-service/comment/comment.query-service.module';

@Module({
  imports: [commentQueryServiceModule],
  providers: [CommentResolver],
})
export class CommentResolverModule {}
