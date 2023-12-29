import { TodosController } from '@/controllers/todos.controller';
import { TodosModel } from '@/models/todos.model';
import { TodosService } from '@/services/todos.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TodosModel])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
