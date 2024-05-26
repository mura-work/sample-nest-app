import { PrismaService } from '../infrastructure/repository/prisma.service';

export const resetTable = async (prismaService: Readonly<PrismaService>) => {
  const tablenames = await prismaService.$queryRaw<
    Array<{ name: string }>
  >`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';`;
  const tables = tablenames.map(({ name }) => `"${name}"`);

  await Promise.all(
    tables.map(async (table) => {
      await prismaService.$executeRawUnsafe(`DELETE FROM ${table};`);
    }),
  );
};
