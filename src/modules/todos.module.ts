import { TodosController } from '@/controllers/todos/todos.controller';
import { TodosResolver } from '@/controllers/todos/todos.resolver';
import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { TodosModel } from '@/models/todos.model';
import { TodosService } from '@/services/todos.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TodosModel])],
  controllers: [TodosController],
  providers: [TodosService, TodosResolver, PrismaService],
})
export class TodosModule {}
