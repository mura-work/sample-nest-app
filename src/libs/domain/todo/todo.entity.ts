import { z } from 'zod';

const todoSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    createdAt: z.date().nullable(), // nullだとDB側で勝手にデータを入れてくれる
    updatedAt: z.date().nullable(),
  })
  .required();

export type Todo = Readonly<z.infer<typeof todoSchema>>;
