import { TodoApplicationServiceModule } from '@/application-service/todo/todo.application-service.module';
import { TodosResolver } from './todos.resolver';
import { Module } from '@nestjs/common';
import { todosQueryServiceModule } from '@/query-service/todo.query-service.module';

@Module({
  imports: [TodoApplicationServiceModule, todosQueryServiceModule],
  providers: [TodosResolver],
})
export class TodoResolverModule {}
