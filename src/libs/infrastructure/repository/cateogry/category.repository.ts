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

  async create(category: Category): Promise<Category> {
    return await this.prismaService.category.create({
      data: {
        name: category.name,
        isActive: category.isActive,
      },
    });
  }

  async update(category: Category): Promise<Category> {
    return await this.prismaService.category.update({
      where: {
        id: category.id,
      },
      data: {
        name: category.name,
        isActive: category.isActive,
      },
    });
  }

  async delete(id: number): Promise<void> {
    return await this.prismaService.category
      .delete({
        where: { id },
      })
      .then();
  }
}
