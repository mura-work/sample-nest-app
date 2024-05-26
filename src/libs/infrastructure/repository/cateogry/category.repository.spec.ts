import {
  TestDataFactory,
  testDataFactoryBuilder,
} from '../../../tests/factory/test-data.factory';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CategoryRepository } from './category.repository';
import { TestingModule, Test } from '@nestjs/testing';
import { resetTable } from '../../../tests/reset-table';

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

  afterEach(async () => {
    await resetTable(prismaService);
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

  describe('findAllByIds', () => {
    it('指定されたidsに該当するカテゴリを全て取得できるか', async () => {
      const categories = await Promise.all(
        ['テスト1', 'テスト2', 'テスト3'].map((name) =>
          testDataFactory.category.create({ name }),
        ),
      );
      const ids = categories.map((c) => c.id);
      const result = await repository.findAllByIds(ids);
      expect(ids.some((id) => id === result[0].id)).toBeTruthy();
      expect(ids.some((id) => id === result[1].id)).toBeTruthy();
      expect(ids.some((id) => id === result[2].id)).toBeTruthy();
    });
    it('指定されていないidは含まれていないか', async () => {
      const categories = await Promise.all(
        ['テスト1', 'テスト2', 'テスト3'].map((name) =>
          testDataFactory.category.create({ name }),
        ),
      );
      const ids = categories.map((c) => c.id);
      const result = await repository.findAllByIds(ids);
      expect(result.some((c) => c.id === -100)).toBeFalsy();
    });
    it('空配列を渡した場合、エラーにならず空配列を返すか', async () => {
      const result = await repository.findAllByIds([]);
      expect(result).toEqual([]);
    });
  });

  describe('create', () => {
    it('カテゴリが保存できるか', async () => {
      const beforeCategory = await testDataFactory.category.create({
        name: 'テスト1',
      });

      const targetCategory = {
        ...beforeCategory,
        name: 'テスト2',
        isActive: false,
      };
      const result = await repository.create(targetCategory);
      expect(result.name).toBe(targetCategory.name);
      expect(result.isActive).toBe(targetCategory.isActive);
    });
  });

  describe('update', () => {
    it('カテゴリが更新できるか', async () => {
      const beforeCategory = await testDataFactory.category.create({
        name: 'テスト1',
      });

      const targetCategory = {
        ...beforeCategory,
        name: '更新後テスト1',
        isActive: false,
      };

      const result = await repository.update(targetCategory);
      expect(result.name).toBe(targetCategory.name);
      expect(result.isActive).toBe(targetCategory.isActive);
    });
  });

  describe('delete', () => {
    it('カテゴリの削除', async () => {
      const category = await testDataFactory.category.create({
        name: 'テスト1',
      });
      await repository.delete(category.id);
      const result = await repository.findById(category.id);
      expect(result).toBeNull();
    });
  });
});
