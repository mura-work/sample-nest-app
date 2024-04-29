import { CommentRepositoryModule } from '@/libs/infrastructure/repository/comment/comment.repository.module';
import { CommentApplicationService } from './comment.application-service';
import { Module } from '@nestjs/common';

@Module({
  imports: [CommentRepositoryModule],
  providers: [CommentApplicationService],
  exports: [CommentApplicationService],
})
export class CommentApplicationServiceModule {}
