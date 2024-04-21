import { Module } from '@nestjs/common';
import { TodosQueryService } from './todo.query-service';
import { PrismaServiceModule } from '@/libs/infrastructure/repository/prisma.service.module';

@Module({
  imports: [PrismaServiceModule],
  providers: [TodosQueryService],
  exports: [TodosQueryService],
})
export class todosQueryServiceModule {}
