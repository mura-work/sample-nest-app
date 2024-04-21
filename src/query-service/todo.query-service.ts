import { Todo } from '@/libs/domain/todo/todo.entity';
import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { todoRecordToEntity } from '@/libs/infrastructure/repository/todo/record-to-entity';
import { Injectable, Scope } from '@nestjs/common';
import type { Prisma } from '@prisma/client';
import { TodosQueryServiceInput } from './todo.query-service.input';

@Injectable({ scope: Scope.DEFAULT })
export class TodosQueryService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(params: TodosQueryServiceInput): Promise<Todo[]> {
    const whereClause: Prisma.TodoWhereInput = {};

    if (params.title !== null) {
      whereClause.title = params.title;
    }

    const result = await this.prismaService.todo.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'asc',
      },
    });

    return result.map((r) => todoRecordToEntity(r));
  }
}
