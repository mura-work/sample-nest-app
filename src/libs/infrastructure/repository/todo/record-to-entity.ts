import type { Todo as PrismaTodo } from '@prisma/client';
import { Todo } from '@/libs/domain/todo/todo.entity';

export const todoRecordToEntity = (resource: PrismaTodo): Todo => {
  return {
    id: String(resource.id),
    title: resource.title,
    status: resource.status,
    createdAt: resource.createdAt,
    updatedAt: resource.updatedAt,
  };
};
