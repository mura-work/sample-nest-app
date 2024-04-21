import { TodoApplicationServiceModule } from '@/application-service/todo/todo.application-service.module';
import { TodosController } from '@/controllers/todos/todos.controller';
import { TodosResolver } from '@/controllers/todos/todos.resolver';
import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { TodosService } from '@/services/todos.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TodoApplicationServiceModule],
  controllers: [TodosController],
  providers: [TodosService, TodosResolver, PrismaService],
})
export class TodosModule {}
