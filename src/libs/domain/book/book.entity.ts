import { z } from 'zod';

const bookSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  price: z.number(),
  createdAt: z.date().nullable(), // NOTE: DB インサート時の値を入れたいので新規作成時 null を入れる
  updatedAt: z.date().nullable(), // NOTE: DB インサート時の値を入れたいので新規作成時 null を入れる、
});

export type Book = Readonly<z.infer<typeof bookSchema>>;
