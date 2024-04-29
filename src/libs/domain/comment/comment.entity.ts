import { z } from 'zod';

const commentSchema = z
  .object({
    id: z.number(),
    content: z.string(),
    bookId: z.number(),
    createdAt: z.date().nullable(), // NOTE: DB インサート時の値を入れたいので新規作成時 null を入れる
    updatedAt: z.date().nullable(), // NOTE: DB インサート時の値を入れたいので新規作成時 null を入れる、
  })
  .required();

export type Comment = Readonly<z.infer<typeof commentSchema>>;
