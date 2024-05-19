import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { commentQueryServiceModule } from '@/query-service/comment/comment.query-service.module';
import { CommentApplicationServiceModule } from '@/application-service/comment/comment.application-service.module';

@Module({
  imports: [commentQueryServiceModule, CommentApplicationServiceModule],
  providers: [CommentResolver],
})
export class CommentResolverModule {}
