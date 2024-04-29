import { PrismaServiceModule } from '@/libs/infrastructure/repository/prisma.service.module';
import { Module } from '@nestjs/common';
import { BooksService } from './books.service';

@Module({
  imports: [PrismaServiceModule],
  providers: [BooksService],
  exports: [BooksService],
})
export class BookServiceModule {}
