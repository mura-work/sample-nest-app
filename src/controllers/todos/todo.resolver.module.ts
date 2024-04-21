import { TodoApplicationServiceModule } from '@/application-service/todo/todo.application-service.module';
import { TodosResolver } from './todos.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [TodoApplicationServiceModule],
  providers: [TodosResolver],
})
export class TodoResolverModule {}
