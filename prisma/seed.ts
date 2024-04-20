import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Todoリストのインサート');
  await Promise.all(
    [
      {
        title: 'プロジェクトプレゼン資料作成',
        status: 'todo',
      },
      {
        title: '週次ステータスミーティング参加',
        status: 'todo',
      },
      {
        title: '顧客からの質問に回答',
        status: 'todo',
      },
      {
        title: 'コードレビュー',
        status: 'todo',
      },
      {
        title: '新規機能の実装',
        status: 'todo',
      },
      {
        title: 'データベースの最適化',
        status: 'todo',
      },
      {
        title: 'テストケースの作成',
        status: 'todo',
      },
      {
        title: 'インターフェースの改善',
        status: 'todo',
      },
      {
        title: 'セキュリティアップデートの適用',
        status: 'todo',
      },
      {
        title: 'ドキュメンテーションの更新',
        status: 'todo',
      },
    ].map(async (todo) => {
      await prisma.todo.create({
        data: {
          title: todo.title,
          status: todo.status,
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
