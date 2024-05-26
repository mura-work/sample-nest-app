import { z } from 'zod';

const categorySchema = z.object({
  id: z.number(),
  name: z.string(),
  isActive: z.boolean(),
  completionDate: z.date(),
  createdAt: z.date().nullable(), // NOTE: DB インサート時の値を入れたいので新規作成時 null を入れる
  updatedAt: z.date().nullable(), // NOTE: DB インサート時の値を入れたいので新規作成時 null を入れる、
});

export type Category = Readonly<z.infer<typeof categorySchema>>;
