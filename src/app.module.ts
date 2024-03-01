import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './modules/todos.module';
import { CompaniesMoudle } from './modules/companies.module';

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
    CompaniesMoudle,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
