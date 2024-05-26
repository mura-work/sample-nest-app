import { Category } from './category.entity';

export abstract class ICategoryRepository {
  abstract findById(id: number): Promise<Category>;
  abstract findAllByIds(ids: number[]): Promise<Category[]>;
  abstract create(category: Category): Promise<Category>;
}
