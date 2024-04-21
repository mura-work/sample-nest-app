import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ITodoRepository } from '@/libs/domain/todo/todo.repository.interface';
import { todoRecordToEntity } from './record-to-entity';

@Injectable({ scope: Scope.DEFAULT })
export class TodoRepository implements ITodoRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async findById(id: string) {
    return this.prismaService.todo
      .findFirst({ where: { id: Number(id) } })
      .then((res) => (res == null ? null : todoRecordToEntity(res)));
  }
}
