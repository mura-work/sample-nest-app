import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sqlitedb.db',
      synchronize: true,
      entities: ['src/entities/*.entity.ts'],
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
