import { PrismaService } from '@/libs/infrastructure/repository/prisma.service';
import { Category } from '@/libs/domain/category/category.entity';

export class CategoryDataFactory {
  constructor(private readonly prismaService?: Readonly<PrismaService>) {}
  build({
    id = 1,
    name = '',
    isActive = true,
    createdAt = new Date(),
    updatedAt = new Date(),
  }): Category {
    return {
      id,
      name,
      isActive,
      createdAt,
      updatedAt,
    };
  }

  async create({ ...restParams }): Promise<Category> {
    if (this.prismaService == null) {
      throw new Error('PrismaService is not initialized');
    }

    const { name, isActive } = {
      ...this.build(restParams),
    };

    return await this.prismaService.category.create({
      data: {
        name,
        isActive,
      },
    });
  }
}
