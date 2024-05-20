import { PrismaServiceModule } from '@/libs/infrastructure/repository/prisma.service.module';
import { Module } from '@nestjs/common';
import { BookApplicationService } from './book.application-service';

@Module({
  imports: [PrismaServiceModule],
  providers: [BookApplicationService],
  exports: [BookApplicationService],
})
export class BookApplicationServiceModule {}
