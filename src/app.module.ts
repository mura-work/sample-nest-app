import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './modules/todos.module';
import { CompaniesMoudle } from './modules/companies.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
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
