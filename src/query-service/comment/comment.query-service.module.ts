import { Module } from '@nestjs/common';
import { CommentQueryService } from './comment.query-service';
import { PrismaServiceModule } from '@/libs/infrastructure/repository/prisma.service.module';

@Module({
  imports: [PrismaServiceModule],
  providers: [CommentQueryService],
  exports: [CommentQueryService],
})
export class commentQueryServiceModule {}
