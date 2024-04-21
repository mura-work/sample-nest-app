import { Module } from '@nestjs/common';
import { TodoApplicationService } from './todo.application-service';
import { TodoRepositoryModule } from '@/libs/infrastructure/repository/todo/todo.repository.module';

@Module({
  imports: [TodoRepositoryModule],
  providers: [TodoApplicationService],
  exports: [TodoApplicationService],
})
export class TodoApplicationServiceModule {}
