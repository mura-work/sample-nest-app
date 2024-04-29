import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TodoResolverModule } from './controllers/todos/todo.resolver.module';
import { PrismaServiceModule } from './libs/infrastructure/repository/prisma.service.module';
import { CommentResolverModule } from './controllers/comment/comment.resolver.module';
import { BookResolverModule } from './controllers/books/book.resolver.module';

const ResolverModules = [
  BookResolverModule,
  TodoResolverModule,
  CommentResolverModule,
];

const CoreModules = [
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    playground: true,
  }),
  // TypeOrmModule.forRoot({
  //   type: 'sqlite',
  //   database: 'db/sqlitedb.db',
  //   synchronize: true,
  //   // entities: ['src/entities/*.entity.ts'],
  //   entities: [__dirname + '/**/*.model{.ts,.js}'],
  // }),
  PrismaServiceModule,
];

@Module({
  imports: [...CoreModules, ...ResolverModules],
})
export class AppModule {}
