import { PrismaService } from '../../infrastructure/repository/prisma.service';
import { CategoryDataFactory } from './category.test-data.factory';

export const testDataFactoryBuilder = (prisma?: Readonly<PrismaService>) => {
  return {
    category: new CategoryDataFactory(prisma),
  };
};

export type TestDataFactory = ReturnType<typeof testDataFactoryBuilder>;
