import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Todoリストのインサート');
  await Promise.all(
    [
      {
        title: 'プロジェクトプレゼン資料作成',
        status: 'todo',
        completionDate: new Date(),
      },
      {
        title: '週次ステータスミーティング参加',
        status: 'todo',
        completionDate: new Date(),
      },
      {
        title: '顧客からの質問に回答',
        status: 'todo',
        completionDate: new Date(),
      },
      {
        title: 'コードレビュー',
        status: 'todo',
        completionDate: new Date(),
      },
      {
        title: '新規機能の実装',
        status: 'todo',
        completionDate: new Date(),
      },
      {
        title: 'データベースの最適化',
        status: 'todo',
        completionDate: new Date(),
      },
      {
        title: 'テストケースの作成',
        status: 'todo',
        completionDate: new Date(),
      },
      {
        title: 'インターフェースの改善',
        status: 'todo',
        completionDate: new Date(),
      },
      {
        title: 'セキュリティアップデートの適用',
        status: 'todo',
        completionDate: new Date(),
      },
      {
        title: 'ドキュメンテーションの更新',
        status: 'todo',
        completionDate: new Date(),
      },
    ].map(async (todo) => {
      await prisma.todo.create({
        data: {
          title: todo.title,
          status: todo.status,
          completionDate: todo.completionDate,
        },
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
