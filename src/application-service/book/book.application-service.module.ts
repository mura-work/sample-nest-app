import { PrismaServiceModule } from '@/libs/infrastructure/repository/prisma.service.module';
import { Module } from '@nestjs/common';
import { BookApplicationService } from './book.application-service';
import { BookRepositoryModule } from '@/libs/infrastructure/repository/book/book.repository.module';

@Module({
  imports: [PrismaServiceModule, BookRepositoryModule],
  providers: [BookApplicationService],
  exports: [BookApplicationService],
})
export class BookApplicationServiceModule {}
