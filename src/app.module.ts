import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './modules/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sqlitedb.db',
      synchronize: true,
      // entities: ['src/entities/*.entity.ts'],
      entities: [__dirname + '/**/*.model{.ts,.js}'],
    }),
    TodosModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
