import {
  TestDataFactory,
  testDataFactoryBuilder,
} from '../../../tests/factory/test-data.factory';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CategoryRepository } from './category.repository';
import { TestingModule, Test } from '@nestjs/testing';

describe('CategoryRepository', () => {
  let app: INestApplication;
  let testDataFactory: TestDataFactory;
  let repository: CategoryRepository;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [CategoryRepository, PrismaService],
    }).compile();

    app = moduleRef.createNestApplication();
    repository =
      await moduleRef.resolve<CategoryRepository>(CategoryRepository);
    prismaService = await moduleRef.resolve<PrismaService>(PrismaService);
    testDataFactory = testDataFactoryBuilder(prismaService);
  });

  afterAll(async () => {
    try {
      await prismaService.$disconnect();
    } finally {
      await app.close();
    }
  });

  describe('findById', () => {
    it('指定されたidに該当するカテゴリを取得できるか', async () => {
      const category = await testDataFactory.category.create({
        name: 'テスト1',
      });
      const result = await repository.findById(category.id);
      expect(result.id).toBe(category.id);
      expect(result.name).toBe(category.name);
    });
    it('存在しないidを渡した場合、nullが帰ってくる', async () => {
      const result = await repository.findById(100000);
      expect(result).toBeNull();
    });
  });
});
