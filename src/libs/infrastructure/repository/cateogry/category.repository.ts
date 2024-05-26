import { ICategoryRepository } from '@/libs/domain/category/category.repository.interface';
import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Category } from '@/libs/domain/category/category.entity';

@Injectable({ scope: Scope.DEFAULT })
export class CategoryRepository implements ICategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllByIds(ids: number[]): Promise<Category[]> {
    return await this.prismaService.category.findMany({
      where: {
        id: { in: ids },
      },
    });
  }

  async findById(id: number): Promise<Category> {
    return await this.prismaService.category.findUnique({
      where: { id },
    });
  }

  async create(
    category: Readonly<{
      id?: number;
      name?: string;
      isActive?: boolean;
      completionDate?: Date;
      createdAt?: Date;
      updatedAt?: Date;
    }>,
  ): Promise<Category> {
    return await this.prismaService.category.findUnique({
      where: { id: 1 },
    });
  }
}
