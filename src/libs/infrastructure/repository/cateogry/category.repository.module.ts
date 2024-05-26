import { ICategoryRepository } from '@/libs/domain/category/category.repository.interface';
import { Module } from '@nestjs/common';
import { CategoryRepository } from './category.repository';

const providers = [
  {
    provide: ICategoryRepository,
    useClass: CategoryRepository,
  },
];

@Module({
  providers: [...providers],
  exports: providers.map((p) => p.provide),
})
// @Module({
//   imports: [CategoryRepository, ICategoryRepository],
//   providers: [CategoryRepository, CategoryRepository],
//   exports: [CategoryRepository],
// })
export class CategoryRepositoryModule {}
