import { Module } from '@nestjs/common';
import { BookResolver } from './books.resolver';
import { BookServiceModule } from '@/services/book.service.module';

@Module({
  imports: [BookServiceModule],
  providers: [BookResolver],
})
export class BookResolverModule {}
